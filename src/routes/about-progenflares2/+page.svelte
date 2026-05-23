<script lang="ts">
	import ProductPage from '$lib/components/ProductPage.svelte';
	import { getProductBySlug } from '$lib/content';
	import { error } from '@sveltejs/kit';

	import banner from '$lib/assets/images/progenflares2Banner.jpg';
	import ex1before from '$lib/assets/examples/progenflares21before.jpg';
	import ex1after from '$lib/assets/examples/progenflares21after.jpg';
	import ex2before from '$lib/assets/examples/progenflares22before.jpg';
	import ex2after from '$lib/assets/examples/progenflares22after.jpg';
	import screenshot from '$lib/assets/examples/progenflares23.jpg';
	import photoshopDemo from '$lib/assets/images/progenflares2-photoshop-demo.jpg';

	const product = getProductBySlug('about-progenflares2');
	if (!product) error(404, 'Product not found');

	const exampleImages: Record<string, string> = {
		'progenflares21before.jpg': ex1before,
		'progenflares21after.jpg': ex1after,
		'progenflares22before.jpg': ex2before,
		'progenflares22after.jpg': ex2after,
		'progenflares23.jpg': screenshot,
		'progenflares2-photoshop-demo.jpg': photoshopDemo
	};
</script>

<ProductPage {product} bannerSrc={banner} {exampleImages} />
