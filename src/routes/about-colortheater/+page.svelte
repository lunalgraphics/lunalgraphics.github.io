<script lang="ts">
	import ProductPage from '$lib/components/ProductPage.svelte';
	import { getProductBySlug } from '$lib/content';
	import { error } from '@sveltejs/kit';

	import banner from '$lib/assets/images/colortheaterBanner.jpg';
	import ex1before from '$lib/assets/examples/colortheater1before.jpg';
	import ex1after from '$lib/assets/examples/colortheater1after.jpg';
	import ex2before from '$lib/assets/examples/colortheater2before.jpg';
	import ex2after from '$lib/assets/examples/colortheater2after.jpg';
	import ex3before from '$lib/assets/examples/colortheater3before.jpg';
	import ex3after from '$lib/assets/examples/colortheater3after.jpg';

	const product = getProductBySlug('about-colortheater');
	if (!product) error(404, 'Product not found');

	const exampleImages: Record<string, string> = {
		'colortheater1before.jpg': ex1before,
		'colortheater1after.jpg': ex1after,
		'colortheater2before.jpg': ex2before,
		'colortheater2after.jpg': ex2after,
		'colortheater3before.jpg': ex3before,
		'colortheater3after.jpg': ex3after
	};
</script>

<ProductPage {product} bannerSrc={banner} {exampleImages} />
