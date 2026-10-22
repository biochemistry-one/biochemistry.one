import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const page = process.argv[2] ?? "index.html";
const html = readFileSync(join(DIST, page), "utf8");
const inlineCss = (source) => source.replace(/<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)"[^>]*>/g, (_, href) => `<style>${readFileSync(join(DIST, href), "utf8")}</style>`);
const head = inlineCss(/<head>([\s\S]*?)<\/head>/.exec(html)[1])
  .replace(/<meta charset[^>]*>|<meta name="viewport"[^>]*>|<link rel="(canonical|alternate|icon|preconnect)"[^>]*>|<meta property[^>]*>|<meta name="description"[^>]*>/g, "");
const body = /<body>([\s\S]*?)<\/body>/.exec(html)[1].replace(/href="\/(?!\/)/g, 'href="#/');
writeFileSync(process.argv[3], `${head}\n${body}\n`);
console.log("preview written");
