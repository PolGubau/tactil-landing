import { getCollection } from "astro:content";

export const blogs = (await getCollection("blog")).sort(
	(a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
);
export type BlogMetadata = (typeof blogs)[number];

export const getBlogs = (limit = Number.MAX_SAFE_INTEGER): BlogMetadata[] => {
	const limitedBlogs = blogs.slice(0, limit);

	return limitedBlogs;
};

// ----
export const projects = (await getCollection("projects"))
	.sort(
		(a, b) =>
			(b.data.endedAt ?? new Date()).valueOf() -
			(a.data.endedAt ?? new Date()).valueOf(),
	)
	.filter((project) => project.data.available === true);

export type ProjectMetadata = (typeof projects)[number];

export const getProjects = (
	limit = Number.MAX_SAFE_INTEGER,
): ProjectMetadata[] => {
	const limitedProjects = projects.slice(0, limit);

	return limitedProjects;
};

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string): number | undefined {
	if (!content) return;
	const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = clean.split(/\s/g).length;
	return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
