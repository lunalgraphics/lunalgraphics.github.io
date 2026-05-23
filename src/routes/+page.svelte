<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { products, blogPosts } from '$lib/content';
	import { siteConfig } from '$lib/config';
	import { onMount } from 'svelte';

	import zeusBanner from '$lib/assets/images/zeusBanner.jpg';
	import srBanner from '$lib/assets/images/spritereplicatorBanner.jpg';
	import ctBanner from '$lib/assets/images/colortheaterBanner.jpg';
	import sbBanner from '$lib/assets/images/superbloomBanner.jpg';
	import pf2Banner from '$lib/assets/images/progenflares2Banner.jpg';
	import energyBall from '$lib/assets/images/energyBall2023.jpg';
	import shockwave from '$lib/assets/images/shockwave.jpg';

	const bannerMap: Record<string, string> = {
		'about-zeus': zeusBanner,
		'about-spritereplicator': srBanner,
		'about-colortheater': ctBanner,
		'about-superbloom': sbBanner,
		'about-progenflares2': pf2Banner
	};

	const heroImages = [energyBall, sbBanner, pf2Banner, srBanner, zeusBanner, shockwave];
	let currentImage = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			currentImage = (currentImage + 1) % heroImages.length;
		}, 5000);
		return () => clearInterval(interval);
	});
</script>

<SocialMetadata
	title="Lunal Graphics"
	description="Free digital art tools for Photoshop and Photopea."
/>

<!-- Hero Section -->
<section class="relative w-full h-[calc(100vh-50px)] md:h-[calc(100vh-64px)] flex items-center justify-center bg-surface-dark overflow-hidden">
	<!-- Background image carousel -->
	{#each heroImages as img, i}
		<div
			class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
			style="background-image: url({img}); opacity: {i === currentImage ? 0.5 : 0};"
			aria-hidden="true"
		></div>
	{/each}

	<div class="text-center space-y-6 px-4 z-10 relative">
		<h1 class="text-5xl md:text-7xl font-heading text-white">LUNAL GRAPHICS</h1>
		<p class="text-xl md:text-2xl text-text">
			Helping digital artists create without barriers.
		</p>
		<div class="flex flex-wrap gap-4 justify-center mt-8">
			<a href="#our-products" class="inline-block px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright rounded bg-surface hover:bg-surface-light transition-colors select-none">
				Our Products
			</a>
			<a href="#whats-new" class="inline-block px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright rounded bg-surface hover:bg-surface-light transition-colors select-none">
				What's New
			</a>
		</div>
	</div>
</section>

<!-- What's New -->
<section class="max-w-3xl mx-auto px-6 py-16">
	<div id="whats-new" class="relative -top-16"></div>
	<h2 class="text-2xl font-heading text-white mb-6">What's New</h2>
	<div class="divide-y divide-surface-light">
		{#each blogPosts.slice(0, 3) as post}
			<a href="/blog/{post.slug}" class="block py-4 group no-underline">
				<time class="text-xs text-text-muted">
					{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
				<h3 class="text-lg font-heading text-white mt-1 group-hover:text-accent transition-colors">
					{post.title}
				</h3>
				<p class="text-sm text-text mt-1">{post.summary}</p>
			</a>
		{/each}
	</div>
	<p class="mt-4">
		<a href="/blog">View all posts →</a>
	</p>
</section>

<!-- Products Grid -->
<section class="max-w-3xl mx-auto px-6 pb-16">
	<div id="our-products" class="relative -top-16"></div>
	<h2 class="text-2xl font-heading text-white mb-8">Our Products</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each products as product}
			<a
				href="/{product.slug}"
				class="relative block rounded-lg overflow-hidden group
					bg-cover bg-center py-20 text-center text-white no-underline
					transition-transform duration-300 hover:scale-[1.02]"
				style="background-image: url({bannerMap[product.slug] || ''});"
				aria-label={product.name}
			>
				<div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
				<div class="relative z-10">
					<h3 class="text-xl font-heading">{product.name}</h3>
					<p class="text-sm mt-1 text-text-bright">{product.tagline}</p>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- Supporters -->
<section class="max-w-3xl mx-auto px-6 pb-16">
	<h2 class="text-2xl font-heading text-white mb-4">Thanks to our supporters on Patreon!</h2>
	<ul class="list-disc list-inside text-text space-y-1 mb-4">
		<li>Lavender</li>
		<li>Валентин Глухота</li>
		<li>Daniel Silverman</li>
	</ul>
	<p class="text-text">
		Please consider
		<a href={siteConfig.patreon} target="_blank" rel="noopener noreferrer">supporting us on Patreon</a>
		to help us build cool stuff.
	</p>
</section>

<!-- Get in Touch -->
<section class="max-w-3xl mx-auto px-6 pb-16">
	<h2 class="text-2xl font-heading text-white mb-4">Get in Touch</h2>
	<p class="text-text">
		Feel free to
		<a href="/contact">contact us</a>,
		<a href="/sociallinks">follow us on social media</a>,
		or <a href={siteConfig.discord} target="_blank" rel="noopener noreferrer">join our Discord server</a>.
	</p>
</section>
