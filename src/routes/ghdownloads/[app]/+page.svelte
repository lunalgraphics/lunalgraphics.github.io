<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { onMount } from 'svelte';

	interface Release {
		name: string;
		tag_name: string;
		published_at: string;
		assets: { name: string; browser_download_url: string }[];
	}

	let { data } = $props();
	const { app } = data;

	let releases = $state<Release[]>([]);
	let loading = $state(true);
	let errorMsg = $state('');

	async function fetchReleases() {
		loading = true;
		errorMsg = '';
		try {
			const res = await fetch(`https://api.github.com/repos/${app.repo}/releases`);
			if (!res.ok) throw new Error('Failed to fetch releases');
			releases = await res.json();
		} catch {
			errorMsg = 'Could not load releases. Please try again later.';
			releases = [];
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchReleases();
	});
</script>

<SocialMetadata title="{app.name} — Downloads" description="Download {app.name} releases." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<div class="flex items-center gap-4 mb-8">
		<a href={app.aboutPage} class="text-sm text-accent hover:text-accent-hover">← Back</a>
		<h2 class="text-xl font-heading text-white">{app.name}</h2>
	</div>

	{#if loading}
		<div class="text-center py-12 text-text-muted">Loading releases...</div>
	{:else if errorMsg}
		<div class="text-center py-12">
			<p class="text-text-muted mb-4">{errorMsg}</p>
			<button
				onclick={fetchReleases}
				class="px-4 py-2 font-heading text-sm text-text-bright border border-text-bright
					rounded hover:bg-surface-light transition-colors cursor-pointer"
			>
				Retry
			</button>
		</div>
	{:else if releases.length === 0}
		<p class="text-text-muted text-center py-12">No releases found.</p>
	{:else}
		<div class="overflow-x-auto">
			<table class="w-full text-sm text-left">
				<thead class="text-text-muted border-b border-surface-light">
					<tr>
						<th class="py-3 pr-4">Version</th>
						<th class="py-3 pr-4">Date</th>
						<th class="py-3">Download</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-surface-light">
					{#each releases as release}
						<tr>
							<td class="py-3 pr-4 text-text-bright">{release.tag_name}</td>
							<td class="py-3 pr-4 text-text">{release.published_at?.slice(0, 10) || 'N/A'}</td>
							<td class="py-3">
								{#if release.assets.length > 0}
									<div class="flex flex-wrap gap-2">
										{#each release.assets as asset}
											<a
												href={asset.browser_download_url}
												class="text-accent hover:text-accent-hover text-xs"
											>
												{asset.name}
											</a>
										{/each}
									</div>
								{:else}
									<span class="text-text-muted">No assets</span>
								{/if}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</article>
