<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { siteConfig } from '$lib/config';
	import { blogPosts } from '$lib/content';
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';

	let {
		title,
		date,
		author = '',
		description,
		banner,
		bannerAlt = '',
		children
	}: {
		title: string;
		date: string;
		author?: string;
		description: string;
		banner: string;
		bannerAlt?: string;
		children: Snippet;
	} = $props();

	let formattedDate = $derived(
		new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);

	let fullUrl = $derived(`${siteConfig.url}${$page.url.pathname}`);

	// Prev/Next navigation
	let currentSlug = $derived($page.url.pathname.split('/').pop() || '');
	let currentIndex = $derived(blogPosts.findIndex((p) => p.slug === currentSlug));
	let prevPost = $derived(currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null);
	let nextPost = $derived(currentIndex > 0 ? blogPosts[currentIndex - 1] : null);

	// Share URLs
	let twitterUrl = $derived(
		`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`
	);
	let redditUrl = $derived(
		`https://reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`
	);

	let copied = $state(false);
	async function copyLink() {
		await navigator.clipboard.writeText(fullUrl);
		copied = true;
		setTimeout(() => { copied = false; }, 2000);
	}
</script>

<SocialMetadata {title} {description} />

<!-- Hero -->
<section
	class="relative w-full h-[400px] max-h-[calc(100vh-50px)] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white px-4">
		<h1 class="text-3xl md:text-4xl font-heading">{title}</h1>
		<p class="mt-2 text-text-bright">
			{#if author}{author}<span class="mx-2">·</span>{/if}{formattedDate}
		</p>
	</div>
</section>

<!-- Content -->
<article class="max-w-3xl mx-auto px-6 py-12 text-text leading-relaxed space-y-6
	[&_h2]:text-xl [&_h2]:font-heading [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4
	[&_h3]:text-lg [&_h3]:font-heading [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-3
	[&_img]:w-full [&_img]:rounded-lg [&_img]:my-4
	[&_strong]:text-text-bright
	[&_code]:text-yellow-300 [&_code]:text-sm
	[&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2
	[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2">
	{@render children()}

	<!-- Share Buttons -->
	<footer class="pt-8 border-t border-surface-light mt-12 space-y-6">
		<div>
			<p class="text-sm text-text-muted mb-3">Share this post</p>
			<div class="flex flex-wrap gap-3">
				<a
					href={twitterUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded border
						border-surface-light bg-surface-dark text-text-bright
						hover:bg-surface-light hover:text-accent transition-colors no-underline"
				>
					𝕏 Twitter
				</a>
				<a
					href={redditUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded border
						border-surface-light bg-surface-dark text-text-bright
						hover:bg-surface-light hover:text-accent transition-colors no-underline"
				>
					Reddit
				</a>
				<button
					onclick={copyLink}
					class="inline-flex items-center gap-2 px-4 py-2 text-sm rounded border
						border-surface-light bg-surface-dark text-text-bright
						hover:bg-surface-light hover:text-accent transition-colors cursor-pointer"
				>
					{copied ? '✓ Copied!' : '🔗 Copy link'}
				</button>
			</div>
		</div>

		<!-- Prev/Next Navigation -->
		{#if prevPost || nextPost}
			<nav class="flex justify-between gap-4 pt-4" aria-label="Blog post navigation">
				{#if prevPost}
					<a href="/blog/{prevPost.slug}" class="group text-left no-underline max-w-[45%]">
						<span class="text-xs text-text-muted">← Previous</span>
						<span class="block text-sm text-text-bright group-hover:text-accent transition-colors truncate">
							{prevPost.title}
						</span>
					</a>
				{:else}
					<div></div>
				{/if}
				{#if nextPost}
					<a href="/blog/{nextPost.slug}" class="group text-right no-underline max-w-[45%] ml-auto">
						<span class="text-xs text-text-muted">Next →</span>
						<span class="block text-sm text-text-bright group-hover:text-accent transition-colors truncate">
							{nextPost.title}
						</span>
					</a>
				{/if}
			</nav>
		{/if}

		<p class="text-center">
			<a href="/blog" class="text-sm">← All posts</a>
		</p>
	</footer>
</article>
