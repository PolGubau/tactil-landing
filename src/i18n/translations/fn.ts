import { en } from "./locales/en";
import { es } from "./locales/es";
import type { TranslationsKey } from "./types";

export const t = (locale: string | undefined, key: TranslationsKey): string => {
  return locale === "es" ? es[key] : en[key];
};