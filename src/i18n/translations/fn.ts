import { en } from "./locales/en";
import { es } from "./locales/es";
import type { TranslationsKey } from "./types";

export const t = (locale: string | undefined, key: TranslationsKey): string => {
	switch (locale) {
		case "es":
			return es[key];
		case "en":
			return en[key];
		default:
			return key;
	}
};

export const useT = (locale: string | undefined) => (key: TranslationsKey) =>
	t(locale, key);
