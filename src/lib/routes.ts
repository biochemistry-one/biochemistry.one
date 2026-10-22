import { LANGUAGES, SECTIONS, type Lang, type Section } from "../i18n/languages";
import { allPages, keyOf, pagesIn, translationsOf, type Page } from "./content";

const ALL_LANGS: Lang[] = LANGUAGES.map((language) => language.code);

export type View =
  | { kind: "home" }
  | { kind: "map" }
  | { kind: "section"; section: Section; pages: Page[] }
  | { kind: "article"; page: Page };

export interface Route {
  lang: Lang;
  path: string;
  alternates: Lang[];
  view: View;
}

export async function allRoutes(): Promise<Route[]> {
  const pages = await allPages();
  const fixed = (["home", "map"] as const).flatMap((kind) =>
    ALL_LANGS.map((lang) => ({ lang, path: kind === "home" ? "" : kind, alternates: ALL_LANGS, view: { kind } })));
  const sections = SECTIONS.flatMap((section) =>
    ALL_LANGS.map((lang) => ({ lang, path: section, alternates: ALL_LANGS, view: { kind: "section" as const, section, pages: pagesIn(pages, lang, section) } })));
  const articles = pages.map((page) => {
    const { lang, section, slug } = keyOf(page);
    return { lang, path: `${section}/${slug}`, alternates: translationsOf(pages, section, slug), view: { kind: "article" as const, page } };
  });
  return [...fixed, ...sections, ...articles];
}

export function routeParam(lang: Lang, path: string): string | undefined {
  const segments = [lang === "en" ? "" : lang, path].filter(Boolean);
  return segments.length > 0 ? segments.join("/") : undefined;
}
