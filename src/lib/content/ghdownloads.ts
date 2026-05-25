export interface GhApp {
	slug: string;
	name: string;
	repo: string;
	aboutPage: string;
}

export const ghApps: GhApp[] = [
	{ slug: 'spritereplicator', name: 'Sprite Replicator', repo: 'yikuansun/sprite-replicator', aboutPage: '/about-spritereplicator' },
	{ slug: 'zeus', name: 'Zeus', repo: 'yikuansun/lightning-experiment', aboutPage: '/about-zeus' },
	{ slug: 'colortheater', name: 'Color Theater', repo: 'lunalgraphics/colortheater', aboutPage: '/about-colortheater' }
];

export function getGhApp(slug: string): GhApp | undefined {
	return ghApps.find((app) => app.slug === slug);
}
