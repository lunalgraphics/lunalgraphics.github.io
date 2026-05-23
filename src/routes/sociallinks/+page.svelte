<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { siteConfig } from '$lib/config';
	import banner from '$lib/assets/images/industrialLogo.jpg';

	const links = [
		{ name: 'Discord', url: siteConfig.discord, icon: '💬' },
		{ name: 'Patreon', url: siteConfig.patreon, icon: '❤️' },
		{ name: 'GitHub', url: siteConfig.github, icon: '🐙' },
		{ name: 'Instagram', url: 'https://www.instagram.com/lunalgraphics/', icon: '📷' }
	];
</script>

<SocialMetadata title="Social Links" description="Find Lunal Graphics on social media." />

<!-- Hero -->
<section
	class="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">Social Links</h1>
		<p class="text-lg mt-2">Find us on social media</p>
	</div>
</section>

<article class="max-w-xl mx-auto px-6 py-12">
	<div class="space-y-4">
		{#each links as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-4 p-4 rounded-lg border border-surface-light
					bg-surface-dark hover:bg-surface-light transition-colors no-underline group"
				aria-label="Visit {link.name}"
			>
				<span class="text-2xl" aria-hidden="true">{link.icon}</span>
				<span class="text-lg text-text-bright group-hover:text-accent transition-colors">
					{link.name}
				</span>
			</a>
		{/each}
	</div>
</article>
