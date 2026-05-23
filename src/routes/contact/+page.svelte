<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import banner from '$lib/assets/images/burningLogo.jpg';
</script>

<SocialMetadata title="Contact" description="Get in touch with Lunal Graphics." />

<!-- Hero -->
<section
	class="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">Contact Us</h1>
	</div>
</section>

<article class="max-w-2xl mx-auto px-6 py-12">
	<form
		action="https://formspree.io/f/xrgjqgqq"
		method="POST"
		class="space-y-6"
	>
		<div>
			<label for="email" class="block text-sm text-text-bright mb-1">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				required
				maxlength={254}
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors"
			/>
		</div>

		<div>
			<label for="topic" class="block text-sm text-text-bright mb-1">Topic</label>
			<select
				id="topic"
				name="topic"
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors"
			>
				<option>General Inquiry</option>
				<option>Feature Request</option>
				<option>Partnership</option>
				<option>Other</option>
			</select>
		</div>

		<div>
			<label for="message" class="block text-sm text-text-bright mb-1">Message</label>
			<textarea
				id="message"
				name="message"
				required
				maxlength={2000}
				rows={6}
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors resize-y"
			></textarea>
		</div>

		<button
			type="submit"
			class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
				rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer"
		>
			Send Message
		</button>
	</form>
</article>
