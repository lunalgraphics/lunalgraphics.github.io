export interface GhApp {
	slug: string;
	name: string;
	repo: string;
}

export const ghApps: GhApp[] = [
	{ slug: 'spritereplicator', name: 'Sprite Replicator', repo: 'yikuansun/sprite-replicator' },
	{ slug: 'zeus', name: 'Zeus', repo: 'yikuansun/lightning-experiment' },
	{ slug: 'colortheater', name: 'Color Theater', repo: 'lunalgraphics/colortheater' }
];

export function getGhApp(slug: string): GhApp | undefined {
	return ghApps.find((app) => app.slug === slug);
}
