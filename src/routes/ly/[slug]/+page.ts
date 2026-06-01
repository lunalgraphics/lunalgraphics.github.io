import { error, redirect } from '@sveltejs/kit';
import { resolveShortlink, shortlinks } from '$lib/content/shortlinks';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const url = resolveShortlink(params.slug);
	if (!url) error(404, 'Short link not found');
	redirect(301, url);
};

export function entries() {
	return Object.keys(shortlinks).map((slug) => ({ slug }));
}
