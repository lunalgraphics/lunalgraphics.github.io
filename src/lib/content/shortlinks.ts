export const shortlinks: Record<string, string> = {
	// Add short slugs mapped to their destination URLs here
	// e.g. 'discord': 'https://discord.gg/example'
    'discord': 'https://discord.gg/NqcVDCcqd4',
    'patreon': 'https://www.patreon.com/yikuans',
    '1yrreel': 'https://www.youtube.com/watch?v=iTLwogYlHIg',
};

export function resolveShortlink(slug: string): string | undefined {
	return shortlinks[slug];
}
