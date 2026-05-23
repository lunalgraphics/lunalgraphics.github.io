<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	interface Release {
		name: string;
		tag_name: string;
		published_at: string;
		assets: { name: string; browser_download_url: string }[];
	}

	const directory: Record<string, { name: string; repo: string }> = {
		'#spritereplicator': { name: 'Sprite Replicator', repo: 'yikuansun/sprite-replicator' },
		'#zeus': { name: 'Zeus', repo: 'yikuansun/lightning-experiment' },
		'#colortheater': { name: 'Color Theater', repo: 'lunalgraphics/colortheater' }
	};

	let appData = $state<{ name: string; repo: string } | null>(null);
	let releases = $state<Release[]>([]);
	let loading = $state(false);
	let errorMsg = $state('');

	async function fetchReleases(repo: string) {
		loading = true;
		errorMsg = '';
		try {
			const res = await fetch(`https://api.github.com/repos/${repo}/releases`);
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
		const hash = $page.url.hash;
		if (directory[hash]) {
			appData = directory[hash];
			fetchReleases(appData.repo);
		}
	});

	function selectApp(hash: string) {
		appData = directory[hash];
		if (appData) fetchReleases(appData.repo);
	}
</script>

<SocialMetadata title="Downloads" description="Download Lunal Graphics plugins." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<h1 class="text-3xl font-heading text-white mb-8">Downloads</h1>

	{#if !appData}
		<p class="text-text mb-6">Select an app to view downloads:</p>
		<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
			{#each Object.entries(directory) as [hash, data]}
				<button
					onclick={() => selectApp(hash)}
					class="p-4 rounded-lg border border-surface-light bg-surface-dark
						hover:bg-surface-light transition-colors text-text-bright font-heading text-sm cursor-pointer"
				>
					{data.name}
				</button>
			{/each}
		</div>
	{:else}
		<div class="flex items-center gap-4 mb-8">
			<button
				onclick={() => { appData = null; releases = []; }}
				class="text-sm text-accent hover:text-accent-hover cursor-pointer bg-transparent border-none"
			>
				← Back
			</button>
			<h2 class="text-xl font-heading text-white">{appData.name}</h2>
		</div>

		{#if loading}
			<div class="text-center py-12 text-text-muted">Loading releases...</div>
		{:else if errorMsg}
			<div class="text-center py-12">
				<p class="text-text-muted mb-4">{errorMsg}</p>
				<button
					onclick={() => appData && fetchReleases(appData.repo)}
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
	{/if}
</article>
