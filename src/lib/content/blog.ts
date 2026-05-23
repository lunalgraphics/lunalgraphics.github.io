export interface BlogPost {
	title: string;
	slug: string;
	date: string;
	author: string;
	summary: string;
	banner: string;
	bannerAlt: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: '[PLEASE READ] LUNAL GRAPHICS IS GOING OPEN SOURCE',
		slug: '5',
		date: '2026-05-22',
		author: 'Yikuan Sun',
		summary: 'The biggest news from Lunal Graphics in the last two years. Learn what this entails.',
		banner: '/images/shockwave.jpg',
		bannerAlt: 'Shockwave'
	},
	{
		title: 'Photopea Playground',
		slug: '4',
		date: '2024-07-25',
		author: 'Yikuan Sun',
		summary: 'An interactive playground for experimenting with the Photopea scripting API.',
		banner: '/blog/4/banner.png',
		bannerAlt: 'Photopea Playground'
	},
	{
		title: 'Installing/Deleting .deb Packages on Linux',
		slug: '3',
		date: '2024-07-17',
		author: 'Yikuan Sun',
		summary: 'A quick guide on how to install and remove .deb packages on Linux.',
		banner: '/blog/3/banner.jpg',
		bannerAlt: 'Linux terminal'
	},
	{
		title: 'Installing Plugins in Photopea',
		slug: '2',
		date: '2024-06-27',
		author: 'Yikuan Sun',
		summary: 'Step-by-step guide to installing Lunal Graphics plugins in Photopea.',
		banner: '/blog/2/banner.png',
		bannerAlt: 'Photopea plugin installation'
	},
	{
		title: 'New Site, New Blog',
		slug: '1',
		date: '2024-07-25',
		author: 'Yikuan Sun',
		summary: 'Introducing the new Lunal Graphics website and blog.',
		banner: '/images/shockwave.jpg',
		bannerAlt: 'Shockwave effect'
	}
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((p) => p.slug === slug);
}
