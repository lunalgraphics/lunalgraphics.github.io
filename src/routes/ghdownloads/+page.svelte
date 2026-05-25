<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { ghApps } from '$lib/content/ghdownloads';
</script>

<SocialMetadata title="Downloads" description="Download Lunal Graphics plugins." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<h1 class="text-3xl font-heading text-white mb-4">Downloads</h1>
	<p class="text-text mb-8">Select an app to view downloads:</p>
	<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
		{#each ghApps as app}
			<a
				href="/ghdownloads/{app.slug}"
				class="p-4 rounded-lg border border-surface-light bg-surface-dark
					hover:bg-surface-light transition-colors no-underline text-center"
			>
				<span class="text-sm font-heading text-text-bright">{app.name}</span>
			</a>
		{/each}
	</div>
</article>
