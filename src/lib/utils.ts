import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string): number | undefined {
	if (!content) return;
	const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = clean.split(/\s/g).length;
	return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
