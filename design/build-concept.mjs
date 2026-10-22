import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { VFile } from "vfile";
import { renderMetabolicMap } from "../src/lib/metabolic-map.mjs";
import { renderPathway } from "../src/markdown/pathway-html.mjs";
import { escapeHtml } from "../src/markdown/html.mjs";
import remarkEvidence from "../src/markdown/remark-evidence.mjs";

const require = createRequire(import.meta.url);
const { unified } = require("unified");
const remarkParse = require("remark-parse").default ?? require("remark-parse");
const remarkGfm = require("remark-gfm").default ?? require("remark-gfm");
const remarkDirective = require("remark-directive").default ?? require("remark-directive");
const remarkRehype = require("remark-rehype").default ?? require("remark-rehype");
const rehypeRaw = require("rehype-raw").default ?? require("rehype-raw");
const rehypeStringify = require("rehype-stringify").default ?? require("rehype-stringify");

const ROOT = new URL("..", import.meta.url).pathname;
const CONTENT = join(ROOT, "src", "content");
const STRINGS = JSON.parse(readFileSync(join(ROOT, "src", "i18n", "strings.json"), "utf8")).en;

const studies = new Map(readdirSync(join(CONTENT, "studies"))
  .filter((name) => name.endsWith(".json"))
  .map((name) => [name.replace(/\.json$/, ""), JSON.parse(readFileSync(join(CONTENT, "studies", name), "utf8"))]));

async function renderArticle(path) {
  const source = readFileSync(path, "utf8");
  const body = source.replace(/^---[\s\S]*?\n---\n/, "");
  const file = new VFile({ value: body, path, data: { astro: { frontmatter: {} } } });
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkEvidence)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(file);
  return { html: String(result.value), citations: result.data.astro.frontmatter.citations };
}

function referenceList(ids) {
  const items = ids.map((id) => {
    const study = studies.get(id);
    const facts = [
      study.registry && [STRINGS.registry, study.registry],
      study.participants !== undefined && [STRINGS.participants, study.participants.toLocaleString("en")],
      study.followUp && [STRINGS.followUp, study.followUp],
      [STRINGS.funder, study.funder],
      study.inKindSupport && [STRINGS.inKind, study.inKindSupport],
      [STRINGS.finding, study.result],
    ].filter(Boolean).map(([term, value]) => `<dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd>`).join("");
    const links = [
      study.doi && `<a href="https://doi.org/${escapeHtml(study.doi)}">doi:${escapeHtml(study.doi)}</a>`,
      study.pmid && `<a href="https://pubmed.ncbi.nlm.nih.gov/${escapeHtml(study.pmid)}/">PubMed ${escapeHtml(study.pmid)}</a>`,
    ].filter(Boolean).join("");
    return `<li id="ref-${id}" class="reference reference-${study.class}"><p class="reference-class"><span class="class-marker class-${study.class}" aria-hidden="true"></span>${escapeHtml(STRINGS.classes[study.class])}</p><p class="reference-citation"><span class="reference-authors">${escapeHtml(study.authors.replace(/\.?$/, "."))}</span> <cite class="reference-title">${escapeHtml(study.title)}</cite> <span class="reference-source">${escapeHtml(study.journal)}, ${study.year}.</span></p><p class="reference-links">${links}</p><details class="reference-details"><summary>${escapeHtml(STRINGS.funder)}, ${escapeHtml(STRINGS.finding.toLowerCase())}</summary><dl class="reference-facts">${facts}</dl></details></li>`;
  });
  return `<section class="references" aria-labelledby="references-heading"><h2 id="references-heading">${escapeHtml(STRINGS.references)}</h2><ol class="reference-list">${items.join("")}</ol></section>`;
}

const article = await renderArticle(join(CONTENT, "pages", "en", "method", "evidence.md"));
const pathway = JSON.parse(readFileSync(join(CONTENT, "pathways", "en", "mevalonate.json"), "utf8"));
const template = readFileSync(join(ROOT, "design", process.argv[2] ?? "concept.template.html"), "utf8");

const { shorelineTokens } = await import("./shoreline-tokens.mjs");

const output = template
  .replace("/*TOKENS*/", shorelineTokens())
  .replace("<!--MAP-->", renderMetabolicMap({ href: (page) => `#${page.replace("/", "-")}`, idPrefix: "hero" }))
  .replace("<!--ARTICLE-->", article.html)
  .replace("<!--REFERENCES-->", referenceList(article.citations))
  .replace("<!--PATHWAY-->", renderPathway(pathway, "en", "mevalonate"));

writeFileSync(join(ROOT, "design", "concept.html"), output);
console.log(`concept.html ${output.length} bytes, ${article.citations.length} references`);
