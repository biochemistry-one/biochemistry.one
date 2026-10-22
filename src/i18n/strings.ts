import strings from "./strings.json";
import ui from "./ui.json";
import type { Lang } from "./languages";

export type Strings = (typeof strings)["en"];
export type Ui = (typeof ui)["en"];

export function stringsFor(lang: Lang): Strings {
  return strings[lang];
}

export function uiFor(lang: Lang): Ui {
  return ui[lang];
}
