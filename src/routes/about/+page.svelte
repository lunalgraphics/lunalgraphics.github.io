<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { siteConfig } from '$lib/config';
	import banner from '$lib/assets/images/frozenLogo.jpg';
</script>

<SocialMetadata title="About" description="About Lunal Graphics — free digital art tools." />

<!-- Hero -->
<section
	class="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">About Us</h1>
	</div>
</section>

<article class="max-w-3xl mx-auto px-6 py-12 space-y-8 text-text leading-relaxed">
	<section>
		<h2 class="text-2xl font-heading text-white mb-4">Our Mission</h2>
		<p>
			Lunal Graphics creates free digital art tools for Photoshop and Photopea.
			We believe that creative software should be accessible to everyone, regardless of budget.
			All of our plugins are free to use and open source.
		</p>
	</section>

	<section>
		<h2 class="text-2xl font-heading text-white mb-4">The Team</h2>
		<p>
			Lunal Graphics is developed by Yikuan Sun, a software developer and digital artist.
		</p>
	</section>

	<section>
		<h2 class="text-2xl font-heading text-white mb-4">Support Us</h2>
		<p>
			If you enjoy our tools, please consider
			<a href={siteConfig.patreon} target="_blank" rel="noopener noreferrer">supporting us on Patreon</a>.
			Your support helps us continue building free creative software.
		</p>
	</section>
</article>
