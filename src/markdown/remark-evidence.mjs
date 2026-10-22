import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { visit, SKIP } from "unist-util-visit";
import { escapeHtml, pageHref } from "./html.mjs";
import { renderPathway } from "./pathway-html.mjs";

const ROOT = new URL("../..", import.meta.url).pathname;
const CONTENT = join(ROOT, "src", "content");
const STRINGS = JSON.parse(readFileSync(join(ROOT, "src", "i18n", "strings.json"), "utf8"));
const LAYERS = ["industry", "consensus", "unresolved"];
const SITE_ROOTS = ["metabolism", "medicines", "additives", "foods", "method", "map"];
const CITATION = /\[(@[^\]]+)\]/g;
const HAS_CITATION = /\[@[^\]]+\]/;

function loadStudies() {
  const directory = join(CONTENT, "studies");
  return new Map(readdirSync(directory)
    .filter((name) => name.endsWith(".json"))
    .map((name) => [name.replace(/\.json$/, ""), JSON.parse(readFileSync(join(directory, name), "utf8"))]));
}

function pageLang(file) {
  const path = relative(join(CONTENT, "pages"), file.history[0]);
  return path.split(sep)[0];
}

function loadPathway(lang, id) {
  const candidates = [join(CONTENT, "pathways", lang, `${id}.json`), join(CONTENT, "pathways", "en", `${id}.json`)];
  const found = candidates.find(existsSync);
  return found ? JSON.parse(readFileSync(found, "utf8")) : undefined;
}

function restoreTextDirectives(tree) {
  visit(tree, "textDirective", (node, index, parent) => {
    parent.children.splice(index, 1, { type: "text", value: `:${node.name}` }, ...node.children);
    return [SKIP, index];
  });
}

function localiseLinks(tree, lang) {
  visit(tree, "link", (node, index, parent) => {
    if (!SITE_ROOTS.includes(node.url.split("/")[1])) return;
    const href = pageHref(lang, node.url);
    if (href) {
      node.url = href;
      return;
    }
    parent.children.splice(index, 1, ...node.children);
    return [SKIP, index];
  });
}

function mergeAdjacentText(tree) {
  visit(tree, (node) => {
    if (!node.children) return;
    node.children = node.children.reduce((merged, child) => {
      const previous = merged.at(-1);
      if (previous?.type === "text" && child.type === "text") previous.value += child.value;
      else merged.push(child);
      return merged;
    }, []);
  });
}

function citationMarker(ids, order, studies, strings, file) {
  const links = ids.map((id) => {
    const study = studies.get(id);
    if (!study) {
      console.warn(`${file.history[0]}: citation ${id} has no study record`);
      return "";
    }
    if (!order.includes(id)) order.push(id);
    const number = order.indexOf(id) + 1;
    const label = `${strings.reference} ${number}, ${strings.classes[study.class]}`;
    return `<a class="cite cite-${study.class}" href="#ref-${id}" aria-label="${escapeHtml(label)}">${number}</a>`;
  });
  return `<sup class="cites">${links.join("")}</sup>`;
}

function splitCitations(value, order, studies, strings, file) {
  const parts = [];
  let last = 0;
  for (const match of value.matchAll(CITATION)) {
    if (match.index > last) parts.push({ type: "text", value: value.slice(last, match.index) });
    const ids = match[1].split(";").map((part) => part.trim().replace(/^@/, ""));
    parts.push({ type: "html", value: citationMarker(ids, order, studies, strings, file) });
    last = match.index + match[0].length;
  }
  if (last < value.length) parts.push({ type: "text", value: value.slice(last) });
  return parts;
}

export default function remarkEvidence() {
  const studies = loadStudies();
  return (tree, file) => {
    const lang = pageLang(file);
    const strings = STRINGS[lang] ?? STRINGS.en;
    const order = [];
    restoreTextDirectives(tree);
    localiseLinks(tree, lang);
    mergeAdjacentText(tree);
    visit(tree, (node, index, parent) => {
      if (node.type === "containerDirective" && LAYERS.includes(node.name)) {
        node.data = { hName: "aside", hProperties: { className: ["layer", `layer-${node.name}`], dataLayer: node.name } };
        node.children.unshift({ type: "html", value: `<p class="layer-label">${escapeHtml(strings.layers[node.name])}</p>` });
        return;
      }
      if (node.type === "leafDirective" && node.name === "pathway") {
        const pathway = loadPathway(lang, node.attributes.id);
        if (!pathway) console.warn(`${file.history[0]}: pathway ${node.attributes.id} has no record`);
        parent.children[index] = { type: "html", value: pathway ? renderPathway(pathway, lang, node.attributes.id) : "" };
        return SKIP;
      }
      if (node.type === "text" && HAS_CITATION.test(node.value)) {
        const parts = splitCitations(node.value, order, studies, strings, file);
        parent.children.splice(index, 1, ...parts);
        return [SKIP, index + parts.length];
      }
    });
    file.data.astro.frontmatter.citations = order;
  };
}
