export interface WebApp {
	slug: string;
	name: string;
	url: string;
	aboutPage: string;
}

export const webApps: WebApp[] = [
	{ slug: 'superbloom', name: 'SuperBloom', url: 'https://lunalgraphics.com/superbloom/', aboutPage: '/about-superbloom' },
	{ slug: 'progenflares2', name: 'Progen Flares 2', url: 'https://lunalgraphics.com/progenflares2/', aboutPage: '/about-progenflares2' },
	{ slug: 'zeus', name: 'Zeus', url: 'https://lunalgraphics.com/zeus/', aboutPage: '/about-zeus' },
	{ slug: 'spritereplicator', name: 'Sprite Replicator', url: 'https://yikuansun.github.io/sprite-replicator/', aboutPage: '/about-spritereplicator' },
	{ slug: 'colortheater', name: 'Color Theater', url: 'https://lunalgraphics.com/colortheater/', aboutPage: '/about-colortheater' }
];

export function getWebApp(slug: string): WebApp | undefined {
	return webApps.find((app) => app.slug === slug);
}
