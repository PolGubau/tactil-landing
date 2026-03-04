import type { Locale } from "../types";
import { ca } from "./ca";
import { en } from "./en";
import { es } from "./es";

export const locales = {
	en,
	es,
	ca,
} as const;

export const localeList = Object.keys(locales) as Locale[];

export const defaultLocale: Locale = "en";
