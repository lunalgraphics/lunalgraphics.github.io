export const siteConfig = {
	name: 'Lunal Graphics',
	url: 'https://lunalgraphics.com',
	description: 'Free digital art tools — Photoshop and Photopea plugins.',
	discord: 'https://discord.gg/NqcVDCcqd4',
	patreon: 'https://www.patreon.com/yikuans',
	github: 'https://github.com/lunalgraphics',
	gaId: 'G-QWCHRCQ92W'
} as const;

export type NavSection = {
	title: string;
	links: NavLink[];
};

export type NavLink = {
	title: string;
	href: string;
	external?: boolean;
};

export const navigation: NavSection[] = [
	{
		title: 'PRODUCTS',
		links: [
			{ title: 'SuperBloom', href: '/about-superbloom' },
			{ title: 'Sprite Replicator', href: '/about-spritereplicator' },
			{ title: 'Zeus', href: '/about-zeus' },
			{ title: 'Color Theater', href: '/about-colortheater' },
			{ title: 'Progen Flares 2', href: '/about-progenflares2' },
			{ title: 'Photoshop Plugins', href: '/photoshop-plugins' }
		]
	},
	{
		title: 'LEARN',
		links: [{ title: 'Video Tutorials', href: '/videotutorials' }]
	},
	{
		title: 'NEWS',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Social', href: '/sociallinks' }
		]
	},
	{
		title: 'COMMUNITY',
		links: [
			{ title: 'Community Resources', href: '/communityresources' },
			{ title: 'Join the Discord', href: 'https://discord.gg/NqcVDCcqd4', external: true }
		]
	},
	{
		title: 'SUPPORT',
		links: [
			{ title: 'Contact', href: '/contact' },
			{ title: 'Report a Bug', href: '/bugreport' }
		]
	}
];
