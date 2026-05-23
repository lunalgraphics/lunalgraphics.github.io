<script lang="ts">
	import { SocialMetadata, ImageComparison } from '$lib/components';
	import type { Product } from '$lib/content';

	let { product, bannerSrc, exampleImages = {} }: {
		product: Product;
		bannerSrc: string;
		exampleImages?: Record<string, string>;
	} = $props();

	function getImageSrc(filename: string): string {
		return exampleImages[filename] || '';
	}
</script>

<SocialMetadata
	title={product.name}
	description={product.description}
/>

<!-- Hero Banner -->
<section
	class="relative w-full h-[500px] max-h-[calc(100vh-50px)] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({bannerSrc});"
>
	<div class="absolute inset-0 bg-black/30"></div>
	<div class="relative z-10 text-center text-white space-y-4 px-4">
		<h1 class="text-4xl md:text-5xl font-heading">{product.name}</h1>
		<p class="text-xl">{product.tagline}</p>
		<div class="flex flex-wrap gap-3 justify-center mt-6">
			<a
				href="/weblauncher/{product.webLauncherHash}"
				class="inline-block px-6 py-3 font-heading text-sm text-text-bright
					border-2 border-text-bright rounded bg-surface/80
					hover:bg-surface-light transition-colors select-none"
			>
				Try it on the Web
			</a>
			<a
				href={product.downloadUrl}
				target={product.downloadExternal ? '_blank' : undefined}
				rel={product.downloadExternal ? 'noopener noreferrer' : undefined}
				class="inline-block px-6 py-3 font-heading text-sm text-text-bright
					border-2 border-text-bright rounded bg-surface/80
					hover:bg-surface-light transition-colors select-none"
			>
				Download
			</a>
		</div>
	</div>
</section>

<!-- Content Sections -->
<article class="max-w-3xl mx-auto px-6 py-12 space-y-12">
	{#each product.sections as section}
		<section>
			<h2 class="text-2xl font-heading text-white mb-4">{section.title}</h2>

			{#if section.example}
				<div class="mb-4">
					<ImageComparison
						before={getImageSrc(section.example.before)}
						after={getImageSrc(section.example.after)}
						beforeAlt={section.example.beforeCaption}
						afterAlt={section.example.afterCaption}
					/>
				</div>
			{/if}

			{#if section.image}
				<figure class="mb-4">
					<img
						src={getImageSrc(section.image.split('/').pop() || '')}
						alt={section.imageAlt || ''}
						class="w-full rounded-lg"
					/>
				</figure>
			{/if}

			<div class="text-text leading-relaxed">
				{@html section.description}
			</div>

			{#if section.title.includes('Photoshop') && product.hasPhotoshopPage}
				<p class="mt-2">
					<a href="/{product.slug}/photoshop">Learn more</a>
				</p>
			{/if}
		</section>
	{/each}
</article>
