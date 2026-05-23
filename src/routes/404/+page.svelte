<script lang="ts">
	import { SocialMetadata } from '$lib/components';
</script>

<SocialMetadata title="Page Not Found" description="The page you're looking for doesn't exist." />

<section class="w-full text-center h-[calc(100vh-50px)] flex items-center justify-center">
	<div class="space-y-4 px-4">
		<h1 class="text-6xl font-heading text-white">404</h1>
		<p class="text-lg text-text">Page not found.</p>
		<a
			href="/"
			class="inline-block mt-4 px-6 py-3 font-heading text-sm text-text-bright
				border-2 border-text-bright rounded bg-surface
				hover:bg-surface-light transition-colors"
		>
			Go Home
		</a>
	</div>
</section>
