import { existsSync } from "node:fs";
import { join } from "node:path";

const ENTITIES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const PAGES = new URL("../content/pages/", import.meta.url).pathname;
const ALIASES = {
  "medicines/omeprazole": "medicines/proton-pump-inhibitors",
  "medicines/lansoprazole": "medicines/proton-pump-inhibitors",
  "medicines/esomeprazole": "medicines/proton-pump-inhibitors",
  "medicines/pantoprazole": "medicines/proton-pump-inhibitors",
  "medicines/atorvastatin": "medicines/statins",
  "medicines/rosuvastatin": "medicines/statins",
  "medicines/simvastatin": "medicines/statins",
  "medicines/lisinopril": "medicines/renin-angiotensin",
  "medicines/ramipril": "medicines/renin-angiotensin",
  "medicines/losartan": "medicines/renin-angiotensin",
  "medicines/metoprolol": "medicines/beta-blockers",
  "medicines/bisoprolol": "medicines/beta-blockers",
  "medicines/albuterol": "medicines/salbutamol",
  "medicines/vitamin-d": "medicines/colecalciferol",
  "additives/aspartame": "additives/sweeteners",
  "additives/sucralose": "additives/sweeteners",
  "foods/palm-oil": "foods/palm-and-seed-oils",
  "foods/seed-oils": "foods/palm-and-seed-oils",
  "foods/vitamin-b12": "metabolism/vitamins",
  "foods/folate": "medicines/folic-acid",
};

export function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (character) => ENTITIES[character]);
}

const pageExists = (lang, target) => existsSync(join(PAGES, lang, `${target}.md`));

export function pageHref(lang, path) {
  const [route, hash] = path.split("#");
  const trimmed = route.replace(/^\/+|\/+$/g, "");
  const target = ALIASES[trimmed] ?? trimmed;
  const isPage = target.includes("/");
  if (isPage && !pageExists("en", target)) return undefined;
  const translated = lang !== "en" && (!isPage || pageExists(lang, target));
  return `${translated ? `/${lang}` : ""}/${target}/${hash ? `#${hash}` : ""}`;
}
