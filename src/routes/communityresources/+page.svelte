<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { onMount } from 'svelte';
	import banner from '$lib/assets/images/shockwave.jpg';

	interface Resource {
		info: { name: string; description: string; type: string; author: string };
		thumbnailURL: string;
		assetURL: string;
	}

	let resources = $state<Resource[]>([]);
	let loading = $state(true);
	let errorMsg = $state('');
	let searchQuery = $state('');
	let typeFilter = $state('Any');

	let filtered = $derived(
		resources.filter((r) => {
			const matchesSearch = r.info.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesType = typeFilter === 'Any' || r.info.type === typeFilter;
			return matchesSearch && matchesType;
		})
	);

	onMount(async () => {
		try {
			const res = await fetch('https://lunalgraphics-communityresources.vercel.app/api/v1/resources');
			if (!res.ok) throw new Error('Failed to fetch');
			const json = await res.json();
			resources = Array.isArray(json) ? json : (json.data ?? []);
		} catch {
			errorMsg = 'Could not load community resources. Please try again later.';
		} finally {
			loading = false;
		}
	});

	async function downloadResource(url: string, name: string) {
		try {
			const res = await fetch(url);
			const blob = await res.blob();
			const ext = url.split('.').pop() || 'bin';
			const a = document.createElement('a');
			a.href = URL.createObjectURL(blob);
			a.download = `${name}.${ext}`;
			document.body.appendChild(a);
			a.click();
			a.remove();
			URL.revokeObjectURL(a.href);
		} catch {
			// Fallback: open in new tab
			window.open(url, '_blank');
		}
	}
</script>

<SocialMetadata title="Community Resources" description="Community-created resources for Lunal Graphics plugins." />

<!-- Hero -->
<section
	class="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">Community Resources</h1>
		<p class="text-lg mt-2">Resources created by the community</p>
	</div>
</section>

<article class="max-w-3xl mx-auto px-6 py-12">
	<!-- Filters -->
	<div class="flex flex-wrap gap-4 mb-8 items-center">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search resources"
			class="flex-1 min-w-[200px] px-4 py-3 bg-surface-dark border border-surface-light rounded
				text-text-bright placeholder:text-text-muted outline-none focus:border-accent transition-colors"
		/>
		<select
			bind:value={typeFilter}
			class="px-4 py-3 bg-surface-dark border border-surface-light rounded
				text-text-bright outline-none focus:border-accent transition-colors"
		>
			<option>Any</option>
			<option value="ctpreset">Color Theater Preset</option>
			<option value="srtexture">SR Texture</option>
			<option value="pgf2preset">PF2 Preset</option>
		</select>
	</div>

	<p class="text-sm text-text-muted mb-6">
		Want to share your own? <a href="/communityresources/submit">Submit a resource</a>
	</p>

	{#if loading}
		<div class="text-center py-12 text-text-muted">Loading resources...</div>
	{:else if errorMsg}
		<div class="text-center py-12 text-text-muted">{errorMsg}</div>
	{:else if filtered.length === 0}
		<div class="text-center py-12 text-text-muted">No resources found.</div>
	{:else}
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			{#each filtered as resource}
				<div class="rounded-lg border border-surface-light overflow-hidden bg-surface-dark">
					{#if resource.thumbnailURL}
						<img
							src={resource.thumbnailURL}
							alt={resource.info.name}
							class="w-full h-32 object-cover"
						/>
					{/if}
					<div class="p-3 space-y-1">
						<h3 class="text-sm font-heading text-text-bright truncate">{resource.info.name}</h3>
						<p class="text-xs text-text-muted">by {resource.info.author}</p>
						<p class="text-xs text-text line-clamp-2">{resource.info.description}</p>
						<button
							onclick={() => downloadResource(resource.assetURL, resource.info.name)}
							class="inline-block mt-2 text-xs text-accent hover:text-accent-hover
								bg-transparent border-none cursor-pointer p-0"
						>
							Download
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</article>
