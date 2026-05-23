<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { page } from '$app/stores';

	let {
		title = siteConfig.name,
		description = siteConfig.description,
		image = ''
	}: {
		title?: string;
		description?: string;
		image?: string;
	} = $props();

	let fullTitle = $derived(title === siteConfig.name ? title : `${title} | ${siteConfig.name}`);
	let canonicalUrl = $derived(`${siteConfig.url}${$page.url.pathname}`);
	let imageUrl = $derived(image ? `${siteConfig.url}${image}` : '');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteConfig.name} />
	{#if imageUrl}
		<meta property="og:image" content={imageUrl} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if imageUrl}
		<meta name="twitter:image" content={imageUrl} />
	{/if}
</svelte:head>
