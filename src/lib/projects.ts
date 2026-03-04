import { getCollection } from "astro:content";

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
