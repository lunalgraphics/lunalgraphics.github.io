import { error } from '@sveltejs/kit';
import { getWebApp, webApps } from '$lib/content/weblauncher';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const app = getWebApp(params.app);
	if (!app) error(404, 'App not found');
	return { app };
};

export function entries() {
	return webApps.map((app) => ({ app: app.slug }));
}
