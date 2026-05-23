import { blogPosts } from '$lib/content';
import { siteConfig } from '$lib/config';

export const prerender = true;

export function GET() {
	const items = blogPosts
		.map(
			(post) => `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${siteConfig.url}/blog/${post.slug}</link>
			<guid>${siteConfig.url}/blog/${post.slug}</guid>
			<description>${escapeXml(post.summary)}</description>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${siteConfig.name} Blog</title>
		<link>${siteConfig.url}/blog</link>
		<description>${siteConfig.description}</description>
		<language>en</language>
		<atom:link href="${siteConfig.url}/blog/rss.xml" rel="self" type="application/rss+xml"/>
		${items}
	</channel>
</rss>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
