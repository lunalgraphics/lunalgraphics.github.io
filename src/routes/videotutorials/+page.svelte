<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { videos } from '$lib/content';
	import banner from '$lib/assets/images/matrixText.jpg';

	const appNames: Record<string, string> = {
		superbloom: 'SuperBloom',
		spritereplicator: 'Sprite Replicator',
		zeus: 'Zeus',
		colortheater: 'Color Theater',
		progenflares2: 'Progen Flares 2'
	};

	let search = $state('');
	let difficulty = $state('Any');
	let appFilters = $state<Record<string, boolean>>({
		superbloom: true,
		spritereplicator: true,
		zeus: true,
		colortheater: true,
		progenflares2: true
	});

	let filtered = $derived(
		videos.filter((vid) => {
			const matchesSearch =
				vid.title.toLowerCase().includes(search.toLowerCase()) ||
				vid.description.toLowerCase().includes(search.toLowerCase());
			const matchesDifficulty = difficulty === 'Any' || vid.difficulty === difficulty;
			const matchesApp = vid.appsUsed.some((app) => appFilters[app]);
			return matchesSearch && matchesDifficulty && matchesApp;
		})
	);
</script>

<SocialMetadata title="Video Tutorials" description="Learn how to make epic art with Lunal Graphics apps!" />

<!-- Hero -->
<section
	class="relative w-full h-[400px] max-h-[calc(100vh-50px)] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">Video Tutorials</h1>
		<p class="text-lg mt-2">Learn to use the Lunal Graphics apps</p>
	</div>
</section>

<!-- Filters & Content -->
<article class="max-w-3xl mx-auto px-6 py-12">
	<!-- Filters -->
	<div class="sticky top-[50px] z-30 bg-surface py-4 space-y-3 border-b border-surface-light">
		<input
			type="text"
			bind:value={search}
			placeholder="Find a tutorial"
			class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
				text-text-bright placeholder:text-text-muted outline-none
				focus:border-accent transition-colors"
		/>

		<div class="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text">
			<span class="text-text-muted">Uses:</span>
			{#each Object.entries(appNames) as [key, label]}
				<label class="inline-flex items-center gap-1.5 cursor-pointer">
					<input
						type="checkbox"
						bind:checked={appFilters[key]}
						class="accent-accent"
					/>
					{label}
				</label>
			{/each}
		</div>

		<div class="text-sm text-text">
			<label class="inline-flex items-center gap-2">
				Difficulty:
				<select
					bind:value={difficulty}
					class="bg-surface-dark border border-surface-light rounded px-2 py-1
						text-text-bright outline-none focus:border-accent"
				>
					<option>Any</option>
					<option>Beginner</option>
					<option>Intermediate</option>
					<option>Advanced</option>
				</select>
			</label>
		</div>
	</div>

	<!-- Results -->
	{#if filtered.length === 0}
		<p class="text-text-muted text-center py-12">No tutorials match your filters.</p>
	{:else}
		<div class="divide-y divide-surface-light">
			{#each filtered as video}
				<div class="py-8 space-y-3">
					<h2 class="text-xl font-heading text-white">{video.title}</h2>
					<p class="text-sm text-accent">{video.difficulty}</p>
					<p class="text-text">{video.description}</p>
					<iframe
						src="https://www.youtube.com/embed/{video.youtubeId}"
						title={video.title}
						class="w-full aspect-video rounded-lg"
						loading="lazy"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			{/each}
		</div>
	{/if}
</article>
