import { getCollection, type CollectionEntry } from "astro:content";
import { LANGUAGES, type Lang, type Section } from "../i18n/languages";

export type Page = CollectionEntry<"pages">;
export type Study = CollectionEntry<"studies">;

export interface PageKey {
  lang: Lang;
  section: Section;
  slug: string;
}

export function keyOf(page: Page): PageKey {
  const [lang, section, slug] = page.id.split("/");
  return { lang: lang as Lang, section: section as Section, slug };
}

export async function allPages(): Promise<Page[]> {
  const pages = await getCollection("pages");
  return pages.sort((a, b) => a.data.order - b.data.order);
}

export function pagesIn(pages: Page[], lang: Lang, section: Section): Page[] {
  return pages.filter((page) => {
    const key = keyOf(page);
    return key.lang === lang && key.section === section;
  });
}

export function translationsOf(pages: Page[], section: Section, slug: string): Lang[] {
  return LANGUAGES.map((language) => language.code).filter((lang) =>
    pages.some((page) => page.id === `${lang}/${section}/${slug}`));
}

export async function studiesById(): Promise<Map<string, Study>> {
  const studies = await getCollection("studies");
  return new Map(studies.map((study) => [study.id, study]));
}
