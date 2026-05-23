<script lang="ts">
	import ProductPage from '$lib/components/ProductPage.svelte';
	import { getProductBySlug } from '$lib/content';
	import { error } from '@sveltejs/kit';

	import banner from '$lib/assets/images/zeusBanner.jpg';
	import ex1before from '$lib/assets/examples/zeus1before.jpg';
	import ex1after from '$lib/assets/examples/zeus1after.jpg';
	import ex2before from '$lib/assets/examples/zeus2before.jpg';
	import ex2after from '$lib/assets/examples/zeus2after.jpg';
	import ex3before from '$lib/assets/examples/zeus3before.jpg';
	import ex3after from '$lib/assets/examples/zeus3after.jpg';

	const product = getProductBySlug('about-zeus');
	if (!product) error(404, 'Product not found');

	const exampleImages: Record<string, string> = {
		'zeus1before.jpg': ex1before,
		'zeus1after.jpg': ex1after,
		'zeus2before.jpg': ex2before,
		'zeus2after.jpg': ex2after,
		'zeus3before.jpg': ex3before,
		'zeus3after.jpg': ex3after
	};
</script>

<ProductPage {product} bannerSrc={banner} {exampleImages} />
