import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const DIST = process.argv[2] ? `${resolve(process.argv[2])}/` : new URL("../dist/", import.meta.url).pathname;

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return name.endsWith(".html") ? [path] : [];
  });
}

function resolves(href) {
  const path = decodeURIComponent(href.split("#")[0].split("?")[0]);
  const target = join(DIST, path);
  return path.endsWith("/") ? existsSync(join(target, "index.html")) : existsSync(target);
}

const broken = new Map();
for (const file of htmlFiles(DIST)) {
  const html = readFileSync(file, "utf8");
  for (const [, href] of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) {
    if (href.startsWith("//") || resolves(href)) continue;
    const pages = broken.get(href) ?? new Set();
    pages.add(relative(DIST, file));
    broken.set(href, pages);
  }
}

if (broken.size === 0) {
  console.log("No broken internal links.");
} else {
  for (const [href, pages] of broken) console.log(`${href} <- ${[...pages].slice(0, 3).join(", ")}${pages.size > 3 ? ` and ${pages.size - 3} more` : ""}`);
  console.log(`${broken.size} broken targets.`);
  process.exitCode = 1;
}
