import type { locales } from "./locales";
import { en } from "./locales/en";

export type Locale = keyof typeof locales;

export const Translations = Object.fromEntries(
	Object.keys(en).map((k) => [k, k]),
) as {
	[K in keyof typeof en]: K;
};

export const T = Translations;
export type TranslationsKey = keyof typeof Translations;

export type TranslationsType = typeof Translations;

export type Translation = TranslationsType[keyof TranslationsType];

export type AllTranslationsKeys = {
	[key in Translation]: string;
};

export type TranslationKey = keyof AllTranslationsKeys;
