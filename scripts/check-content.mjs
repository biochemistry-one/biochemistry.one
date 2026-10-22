import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const CONTENT = join(ROOT, "src", "content");
const LANGS = ["en", "ja", "zh", "ru", "de", "es", "fr"];
const SECTIONS = ["metabolism", "medicines", "additives", "foods", "method"];
const PAGE_KEYS = ["title", "description", "summary", "section", "order", "updated", "related"];
const REQUIRED_PAGE_KEYS = ["title", "description", "summary", "section", "order", "updated"];
const DESIGNS = ["rct", "meta-analysis", "systematic-review", "cohort", "case-control", "cross-sectional", "mendelian-randomisation", "genetic", "mechanistic", "animal", "in-vitro", "regulatory", "guideline", "textbook", "database", "other"];
const FUNDER_ROLES = ["none", "design", "analysis", "publication", "several", "unknown"];
const DATA_ACCESS = ["individual", "summary", "unavailable", "unknown"];
const CLASSES = ["independent", "industry", "regulatory", "consensus", "reference", "undetermined"];
const LAYERS = {
  main: ["independent", "regulatory", "reference"],
  industry: ["industry", "regulatory"],
  consensus: ["consensus", "regulatory"],
  unresolved: CLASSES,
};
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const filter = process.argv[2] ?? "";
const violations = [];

function report(file, message) {
  violations.push(`${relative(ROOT, file)}: ${message}`);
}

function listFiles(dir, extension) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return listFiles(path, extension);
    return name.endsWith(extension) ? [path] : [];
  });
}

function readJson(file) {
  try {
    return JSON.parse(readFileSync(file, "utf8"));
  } catch (error) {
    report(file, `invalid JSON: ${error.message}`);
    return null;
  }
}

function unquote(value) {
  const trimmed = value.trim();
  const quoted = /^"(.*)"$/s.exec(trimmed) ?? /^'(.*)'$/s.exec(trimmed);
  return quoted ? quoted[1] : trimmed;
}

function parseFrontmatter(lines) {
  const data = {};
  let index = 0;
  while (index < lines.length) {
    const match = /^([A-Za-z]+):\s*(.*)$/.exec(lines[index]);
    if (!match) return { error: `unparsed frontmatter line ${index + 2}: ${lines[index]}` };
    const [, key, rest] = match;
    index++;
    const nested = [];
    while (index < lines.length && /^\s+\S/.test(lines[index])) nested.push(lines[index++]);
    if (/^[|>]-?$/.test(rest)) data[key] = nested.map((line) => line.trim()).join(rest.startsWith(">") ? " " : "\n");
    else if (rest === "" && nested.every((line) => /^\s+-\s+/.test(line))) data[key] = nested.map((line) => unquote(line.replace(/^\s+-\s+/, "")));
    else if (/^\[.*\]$/.test(rest)) data[key] = rest.slice(1, -1).split(",").map(unquote).filter(Boolean);
    else {
      const value = [rest, ...nested.map((line) => line.trim())].join(" ");
      if (!/^["']/.test(value) && /:\s|\s#/.test(value)) return { error: `frontmatter value of ${key} contains ": " or " #" and needs quotes` };
      data[key] = unquote(value);
    }
  }
  return { data };
}

function splitPage(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  if (lines[0] !== "---") return { error: "file does not begin with a frontmatter line ---" };
  const end = lines.indexOf("---", 1);
  if (end < 0) return { error: "frontmatter is not closed with ---" };
  return { frontmatter: lines.slice(1, end), body: lines.slice(end + 1) };
}

function checkFrontmatter(file, data, section) {
  for (const key of Object.keys(data)) if (!PAGE_KEYS.includes(key)) report(file, `unknown frontmatter key ${key}`);
  for (const key of REQUIRED_PAGE_KEYS) if (!data[key]) report(file, `missing frontmatter key ${key}`);
  if (data.title && data.title.length > 60) report(file, `title exceeds 60 characters (${data.title.length})`);
  if (data.description && data.description.length > 160) report(file, `description exceeds 160 characters (${data.description.length})`);
  if (data.section && data.section !== section) report(file, `section ${data.section} differs from folder ${section}`);
  if (data.order && !/^\d+$/.test(data.order)) report(file, `order is not an integer: ${data.order}`);
  if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) report(file, `updated is not a date: ${data.updated}`);
  for (const entry of data.related ?? []) {
    const [relatedSection, slug, extra] = entry.split("/");
    if (extra !== undefined || !SECTIONS.includes(relatedSection) || !SLUG.test(slug ?? "")) report(file, `related entry is not <section>/<slug>: ${entry}`);
  }
}

function scanBody(file, body, lang, studies) {
  const citations = [];
  const pathways = [];
  const layers = [];
  let layer = "main";
  const firstLine = body.find((line) => line.trim() !== "");
  if (!firstLine?.startsWith("## ")) report(file, "body does not begin with a ## heading");
  body.forEach((line, index) => {
    const lineNumber = index + 1;
    const opening = /^:::(\w+)\s*$/.exec(line);
    if (opening) {
      if (layer !== "main") report(file, `body line ${lineNumber}: layer ${opening[1]} opened inside ${layer}`);
      if (!(opening[1] in LAYERS) || opening[1] === "main") report(file, `body line ${lineNumber}: unknown layer ${opening[1]}`);
      layer = opening[1];
      layers.push(layer);
      return;
    }
    if (/^:::\s*$/.test(line)) {
      if (layer === "main") report(file, `body line ${lineNumber}: ::: closes no layer`);
      layer = "main";
      return;
    }
    if (/^#\s/.test(line)) report(file, `body line ${lineNumber}: level-1 heading`);
    const pathway = /^::pathway\{id="([^"]+)"\}\s*$/.exec(line);
    if (pathway) {
      pathways.push(pathway[1]);
      if (!existsSync(join(CONTENT, "pathways", lang, `${pathway[1]}.json`))) report(file, `body line ${lineNumber}: pathway ${pathway[1]} has no record in pathways/${lang}`);
      return;
    }
    if (/^::\w/.test(line)) report(file, `body line ${lineNumber}: unknown directive ${line.trim()}`);
    for (const group of line.matchAll(/\[(@[^\]]+)\]/g)) {
      for (const part of group[1].split(";")) {
        const id = part.trim().replace(/^@/, "");
        citations.push(id);
        const study = studies.get(id);
        if (!study) report(file, `body line ${lineNumber}: citation ${id} has no study record`);
        else if (!LAYERS[layer].includes(study.class)) report(file, `body line ${lineNumber}: ${study.class} study ${id} cited in ${layer === "main" ? "main text" : `:::${layer}`}`);
      }
    }
  });
  if (layer !== "main") report(file, `layer ${layer} is not closed`);
  return { citations, pathways, layers };
}

function checkStudy(file, study) {
  const required = ["title", "authors", "journal", "year", "design", "funder", "funderRole", "dataAccess", "result", "class", "fundingChecked"];
  for (const key of required) if (study[key] === undefined || study[key] === "") report(file, `missing ${key}`);
  if (!study.doi && !study.pmid && !study.url) report(file, "doi, pmid and url are all absent");
  if (study.year !== undefined && !Number.isInteger(study.year)) report(file, "year is not an integer");
  if (study.participants !== undefined && !Number.isInteger(study.participants)) report(file, "participants is not an integer");
  if (study.design && !DESIGNS.includes(study.design)) report(file, `unknown design ${study.design}`);
  if (study.funderRole && !FUNDER_ROLES.includes(study.funderRole)) report(file, `unknown funderRole ${study.funderRole}`);
  if (study.dataAccess && !DATA_ACCESS.includes(study.dataAccess)) report(file, `unknown dataAccess ${study.dataAccess}`);
  if (study.class && !CLASSES.includes(study.class)) report(file, `unknown class ${study.class}`);
  if (study.doi && !/^10\.\d{4,9}\/\S+$/.test(study.doi)) report(file, `doi is malformed: ${study.doi}`);
  if (study.pmid && !/^\d+$/.test(study.pmid)) report(file, `pmid is not numeric: ${study.pmid}`);
}

function checkPathway(file, pathway) {
  if (!pathway.title) report(file, "missing title");
  if (!["chain", "cycle"].includes(pathway.layout)) report(file, `layout is not chain or cycle: ${pathway.layout}`);
  if (!Array.isArray(pathway.steps) || pathway.steps.length === 0) return report(file, "steps is empty");
  pathway.steps.forEach((step, index) => {
    for (const key of ["from", "to", "enzyme"]) if (!step[key]) report(file, `step ${index + 1}: missing ${key}`);
    const next = pathway.steps[index + 1];
    if (next && step.to !== next.from) report(file, `step ${index + 1}: to "${step.to}" differs from next from "${next.from}"`);
    if (step.note && step.note.length > 80) report(file, `step ${index + 1}: note exceeds 80 characters`);
    for (const inhibitor of step.inhibitors ?? []) if (!inhibitor.name) report(file, `step ${index + 1}: inhibitor without name`);
  });
  const last = pathway.steps.at(-1);
  if (pathway.layout === "cycle" && last.to !== pathway.steps[0].from) report(file, `cycle: last to "${last.to}" differs from first from "${pathway.steps[0].from}"`);
}

function loadStudies() {
  const studies = new Map();
  for (const file of listFiles(join(CONTENT, "studies"), ".json")) {
    const id = file.split(sep).at(-1).replace(/\.json$/, "");
    if (!SLUG.test(id)) report(file, `study id is not lowercase-hyphenated: ${id}`);
    const study = readJson(file);
    if (!study) continue;
    checkStudy(file, study);
    studies.set(id, study);
  }
  return studies;
}

function sameMultiset(left, right) {
  return JSON.stringify([...left].sort()) === JSON.stringify([...right].sort());
}

function checkPages(studies) {
  const scans = new Map();
  const files = LANGS.flatMap((lang) => listFiles(join(CONTENT, "pages", lang), ".md"));
  for (const file of files) {
    const [lang, section, name, extra] = relative(join(CONTENT, "pages"), file).split(sep);
    const key = `${section}/${name?.replace(/\.md$/, "")}`;
    if (!`${lang}/${key}`.startsWith(filter)) continue;
    if (extra !== undefined || !SECTIONS.includes(section)) {
      report(file, "path is not pages/<lang>/<section>/<slug>.md");
      continue;
    }
    if (!SLUG.test(key.split("/")[1])) report(file, "slug is not lowercase-hyphenated");
    const page = splitPage(file);
    if (page.error) {
      report(file, page.error);
      continue;
    }
    const frontmatter = parseFrontmatter(page.frontmatter);
    if (frontmatter.error) report(file, frontmatter.error);
    else checkFrontmatter(file, frontmatter.data, section);
    scans.set(`${lang}/${key}`, { file, ...scanBody(file, page.body, lang, studies) });
  }
  for (const [path, scan] of scans) {
    const [lang, ...rest] = path.split("/");
    if (lang === "en") continue;
    const source = scans.get(`en/${rest.join("/")}`) ?? (existsSync(join(CONTENT, "pages", "en", `${rest.join("/")}.md`)) ? null : undefined);
    if (source === undefined) report(scan.file, "English source page does not exist");
    if (!source) continue;
    if (!sameMultiset(scan.citations, source.citations)) report(scan.file, "citations differ from the English source");
    if (scan.layers.join() !== source.layers.join()) report(scan.file, "evidence layers differ from the English source");
    if (scan.pathways.join() !== source.pathways.join()) report(scan.file, "pathway diagrams differ from the English source");
  }
}

function checkPathways() {
  for (const lang of LANGS) {
    for (const file of listFiles(join(CONTENT, "pathways", lang), ".json")) {
      if (!relative(join(CONTENT, "pathways"), file).startsWith(filter.split("/")[0])) continue;
      const pathway = readJson(file);
      if (pathway) checkPathway(file, pathway);
    }
  }
}

const studies = loadStudies();
checkPages(studies);
checkPathways();

if (violations.length === 0) {
  console.log("No violations.");
} else {
  console.log(violations.join("\n"));
  console.log(`${violations.length} violations.`);
  process.exitCode = 1;
}
