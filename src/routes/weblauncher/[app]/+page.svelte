<script lang="ts">
	import { SocialMetadata } from '$lib/components';

	let { data } = $props();
	const { app } = data;
</script>

<SocialMetadata title="{app.name} — Web Launcher" description="Launch {app.name} in your browser." />

<div class="flex items-center gap-4 px-4 py-2 bg-surface-dark border-b border-surface-light text-sm">
	<a href="/weblauncher" onclick={(e) => { if (history.length > 1) { e.preventDefault(); history.back(); } }} class="text-accent hover:text-accent-hover">← Back</a>
	<span class="text-text-bright font-heading">{app.name}</span>
	<span class="text-text-muted">|</span>
	<a href="https://www.patreon.com/yikuans/membership" target="_blank" rel="noopener noreferrer">
		Donate
	</a>
</div>
<iframe
	src={app.url}
	title="{app.name} Web App"
	class="w-full border-none"
	style="height: calc(100vh - 50px - 40px); min-height: 400px;"
></iframe>
