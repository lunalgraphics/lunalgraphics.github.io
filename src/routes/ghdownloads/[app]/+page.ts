import { error } from '@sveltejs/kit';
import { getGhApp, ghApps } from '$lib/content/ghdownloads';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const app = getGhApp(params.app);
	if (!app) error(404, 'App not found');
	return { app };
};

export function entries() {
	return ghApps.map((app) => ({ app: app.slug }));
}
