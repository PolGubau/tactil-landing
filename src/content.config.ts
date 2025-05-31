import { glob } from "astro/loaders";
import { defineCollection, z, type InferEntrySchema } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		available: z.boolean().optional(),
		title: z.string(),
		summary: z.string(),
		publishedAt: z.string().transform((str) => new Date(str)),
		tags: z.array(z.string()).optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			available: z.boolean(),
			startedAt: z.string().transform((str) => new Date(str)),
			endedAt: z
				.string()
				.transform((str) => new Date(str))
				.optional(),
			color: z.string(),
			link: z.string().optional(),
			githubLink: z.string().optional(),
			npmCommand: z.string().optional(),
			npmLink: z.string().optional(),
			cover: image(),
			category: z.string(),
			tech: z.array(z.string()).optional(),
		}),
});

export type Project = InferEntrySchema<"projects">;
export type Blog = InferEntrySchema<"blog">;

export const collections = { blog, projects };
