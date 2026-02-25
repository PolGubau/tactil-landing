import type { Locale } from "../types";
import { en } from "./en";
import { es } from "./es";

export const locales = {
	en,
	es,
} as const;

export const localeList = Object.keys(locales) as Locale[];

export const defaultLocale: Locale = "en";
