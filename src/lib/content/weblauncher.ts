export interface WebApp {
	slug: string;
	name: string;
	url: string;
}

export const webApps: WebApp[] = [
	{ slug: 'superbloom', name: 'SuperBloom', url: 'https://lunalgraphics.com/superbloom/' },
	{ slug: 'progenflares2', name: 'Progen Flares 2', url: 'https://progenflares2-web-preview.vercel.app/' },
	{ slug: 'zeus', name: 'Zeus', url: 'https://yikuansun.github.io/lightning-experiment/' },
	{ slug: 'spritereplicator', name: 'Sprite Replicator', url: 'https://yikuansun.github.io/sprite-replicator/' },
	{ slug: 'colortheater', name: 'Color Theater', url: 'https://lunalgraphics.com/colortheater/' }
];

export function getWebApp(slug: string): WebApp | undefined {
	return webApps.find((app) => app.slug === slug);
}
