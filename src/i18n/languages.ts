export const LANGUAGES = [
  { code: "en", hreflang: "en", name: "English" },
  { code: "ja", hreflang: "ja", name: "日本語" },
  { code: "zh", hreflang: "zh-Hans", name: "简体中文" },
  { code: "ru", hreflang: "ru", name: "Русский" },
  { code: "de", hreflang: "de", name: "Deutsch" },
  { code: "es", hreflang: "es", name: "Español" },
  { code: "fr", hreflang: "fr", name: "Français" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANG: Lang = "en";

export const SECTIONS = ["metabolism", "medicines", "additives", "foods", "method"] as const;

export type Section = (typeof SECTIONS)[number];

export function hreflangOf(lang: Lang): string {
  return LANGUAGES.find((language) => language.code === lang)!.hreflang;
}

export function localePath(lang: Lang, path = ""): string {
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed === "" ? `${prefix}/` : `${prefix}/${trimmed}/`;
}
