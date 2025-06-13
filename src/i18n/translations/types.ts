const translationKeys = [
  "title", "subtitle", "summary", "getInTouch"

] as const;

export const Translations = Object.fromEntries(translationKeys.map((k) => [k, k])) as {
  [K in (typeof translationKeys)[number]]: K;
};

export const T = Translations;
export type TranslationsKey = keyof typeof Translations;

export type TranslationsType = typeof Translations;

export type Translation = TranslationsType[keyof TranslationsType];

export type AllTranslationsKeys = {
  [key in Translation]: string;
};

export type TranslationKey = keyof AllTranslationsKeys;
