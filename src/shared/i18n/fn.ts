import { defaultLocale, locales } from "./locales";
import { en } from "./locales/en";
import type { Locale, TranslationsKey } from "./types";

export const t = (locale: string | undefined, key: TranslationsKey): string => {
	return (locales[locale as Locale] || en)[key] || key;
};

export const useT = (locale: string | undefined) => (key: TranslationsKey) =>
	t(locale, key);

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang in locales) return lang as Locale;
	return defaultLocale;
}
