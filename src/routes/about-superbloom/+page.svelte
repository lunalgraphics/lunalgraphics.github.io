<script lang="ts">
	import ProductPage from '$lib/components/ProductPage.svelte';
	import { getProductBySlug } from '$lib/content';
	import { error } from '@sveltejs/kit';

	import banner from '$lib/assets/images/superbloomBanner.jpg';
	import ex1before from '$lib/assets/examples/superbloom1before.jpg';
	import ex1after from '$lib/assets/examples/superbloom1after.jpg';
	import ex2before from '$lib/assets/examples/superbloom2before.jpg';
	import ex2after from '$lib/assets/examples/superbloom2after.jpg';
	import ex3before from '$lib/assets/examples/superbloom3before.jpg';
	import ex3after from '$lib/assets/examples/superbloom3after.jpg';
	import ex4before from '$lib/assets/examples/superbloom4before.jpg';
	import ex4after from '$lib/assets/examples/superbloom4after.jpg';
	import photoshopDemo from '$lib/assets/images/superbloom-photoshop-demo.png';

	const product = getProductBySlug('about-superbloom');
	if (!product) error(404, 'Product not found');

	const exampleImages: Record<string, string> = {
		'superbloom1before.jpg': ex1before,
		'superbloom1after.jpg': ex1after,
		'superbloom2before.jpg': ex2before,
		'superbloom2after.jpg': ex2after,
		'superbloom3before.jpg': ex3before,
		'superbloom3after.jpg': ex3after,
		'superbloom4before.jpg': ex4before,
		'superbloom4after.jpg': ex4after,
		'superbloom-photoshop-demo.png': photoshopDemo
	};
</script>

<ProductPage {product} bannerSrc={banner} {exampleImages} />
