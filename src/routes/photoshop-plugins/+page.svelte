<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import superbloomDemo from '$lib/assets/images/superbloom-photoshop-demo.png';
	import pf2Demo from '$lib/assets/images/progenflares2-photoshop-demo.jpg';
</script>

<SocialMetadata title="Photoshop Plugins" description="Free Photoshop plugins by Lunal Graphics." />

<article class="max-w-3xl mx-auto px-6 py-16">
	<h1 class="text-3xl font-heading text-white mb-4">Photoshop Plugins</h1>
	<p class="text-text mb-12">
		We offer free plugins for Adobe Photoshop. Install them via the Adobe Exchange marketplace.
	</p>

	<div class="space-y-12">
		<!-- SuperBloom -->
		<section class="space-y-4">
			<h2 class="text-2xl font-heading text-white">SuperBloom for Photoshop</h2>
			<img src={superbloomDemo} alt="SuperBloom running in Photoshop" class="w-full rounded-lg" />
			<p class="text-text">
				Create photorealistic bloom and glow effects directly in Photoshop.
			</p>
			<a
				href="/about-superbloom/photoshop"
				class="inline-block px-5 py-2.5 font-heading text-sm text-text-bright
					border-2 border-text-bright rounded bg-surface
					hover:bg-surface-light transition-colors"
			>
				Install SuperBloom
			</a>
		</section>

		<!-- Progen Flares 2 -->
		<section class="space-y-4">
			<h2 class="text-2xl font-heading text-white">Progen Flares 2 for Photoshop</h2>
			<img src={pf2Demo} alt="Progen Flares 2 running in Photoshop" class="w-full rounded-lg" />
			<p class="text-text">
				Create beautiful, fully-customizable lens flares directly in Photoshop.
			</p>
			<a
				href="/about-progenflares2/photoshop"
				class="inline-block px-5 py-2.5 font-heading text-sm text-text-bright
					border-2 border-text-bright rounded bg-surface
					hover:bg-surface-light transition-colors"
			>
				Install Progen Flares 2
			</a>
		</section>
	</div>
</article>
