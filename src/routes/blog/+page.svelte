<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { blogPosts } from '$lib/content';

	function formatDate(iso: string): string {
		return new Date(iso).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<SocialMetadata title="Blog" description="Updates, tutorials, and announcements from Lunal Graphics." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<h1 class="text-3xl font-heading text-white mb-8">Blog</h1>

	<div class="divide-y divide-surface-light">
		{#each blogPosts as post}
			<a href="/blog/{post.slug}" class="block py-6 group no-underline">
				<time class="text-sm text-text-muted">{formatDate(post.date)}</time>
				{#if post.author}<span class="text-sm text-text-muted"> · {post.author}</span>{/if}
				<h2 class="text-xl font-heading text-white mt-1 group-hover:text-accent transition-colors">
					{post.title}
				</h2>
				<p class="text-text mt-2">{post.summary}</p>
			</a>
		{/each}
	</div>
</article>
