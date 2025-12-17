import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getMetadata } from '~/lib/constants';

const metadata = getMetadata("en")
export async function GET(context) {
	const project = await getCollection('projects');

	const projectsItems = project.map((proj) => ({
		...proj.data,
		link: `/project/${proj.id}/`,
	}));

	const allItems = [ ...projectsItems];

	return rss({
		title: metadata.title,
		description: metadata.description,
		site: context.site,
		items: allItems
	});
}
