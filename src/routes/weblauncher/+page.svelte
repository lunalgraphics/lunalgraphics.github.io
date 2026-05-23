<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { webApps } from '$lib/content/weblauncher';
</script>

<SocialMetadata title="Web Launcher" description="Launch Lunal Graphics plugins in your browser." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<h1 class="text-3xl font-heading text-white mb-4">Web Launcher</h1>
	<p class="text-text mb-8">Select an app to launch in your browser:</p>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		{#each webApps as app}
			<a
				href="/weblauncher/{app.slug}"
				class="p-6 rounded-lg border border-surface-light bg-surface-dark
					hover:bg-surface-light transition-colors no-underline text-center"
			>
				<span class="text-lg font-heading text-text-bright">{app.name}</span>
			</a>
		{/each}
	</div>
</article>
