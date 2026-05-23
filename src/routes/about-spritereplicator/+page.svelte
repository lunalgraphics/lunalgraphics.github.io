<script lang="ts">
	import ProductPage from '$lib/components/ProductPage.svelte';
	import { getProductBySlug } from '$lib/content';
	import { error } from '@sveltejs/kit';

	import banner from '$lib/assets/images/spritereplicatorBanner.jpg';
	import ex1before from '$lib/assets/examples/spritereplicator1before.jpg';
	import ex1after from '$lib/assets/examples/spritereplicator1after.jpg';
	import ex2before from '$lib/assets/examples/spritereplicator2before.jpg';
	import ex2after from '$lib/assets/examples/spritereplicator2after.jpg';
	import ex3before from '$lib/assets/examples/spritereplicator3before.jpg';
	import ex3after from '$lib/assets/examples/spritereplicator3after.jpg';
	import ex4before from '$lib/assets/examples/spritereplicator4before.jpg';
	import ex4after from '$lib/assets/examples/spritereplicator4after.jpg';

	const product = getProductBySlug('about-spritereplicator');
	if (!product) error(404, 'Product not found');

	const exampleImages: Record<string, string> = {
		'spritereplicator1before.jpg': ex1before,
		'spritereplicator1after.jpg': ex1after,
		'spritereplicator2before.jpg': ex2before,
		'spritereplicator2after.jpg': ex2after,
		'spritereplicator3before.jpg': ex3before,
		'spritereplicator3after.jpg': ex3after,
		'spritereplicator4before.jpg': ex4before,
		'spritereplicator4after.jpg': ex4after
	};
</script>

<ProductPage {product} bannerSrc={banner} {exampleImages} />
