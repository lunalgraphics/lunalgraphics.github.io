<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import banner from '$lib/assets/images/burningLogo.jpg';
</script>

<SocialMetadata title="Report a Bug" description="Report a bug in a Lunal Graphics plugin." />

<!-- Hero -->
<section
	class="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
	style="background-image: url({banner});"
>
	<div class="absolute inset-0 bg-black/40"></div>
	<div class="relative z-10 text-center text-white">
		<h1 class="text-4xl font-heading">Report a Bug</h1>
	</div>
</section>

<article class="max-w-2xl mx-auto px-6 py-12">
	<form
		action="https://formspree.io/f/xrgjqgqq"
		method="POST"
		class="space-y-6"
	>
		<div>
			<label for="topic" class="block text-sm text-text-bright mb-1">App</label>
			<select
				id="topic"
				name="topic"
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors"
			>
				<option>SuperBloom Bug Report</option>
				<option>Zeus Bug Report</option>
				<option>Sprite Replicator Bug Report</option>
				<option>Color Theater Bug Report</option>
				<option>Progen Flares 2 Bug Report</option>
			</select>
		</div>

		<div>
			<label for="platform" class="block text-sm text-text-bright mb-1">Platform</label>
			<select
				id="platform"
				name="platform"
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors"
			>
				<option>Standalone Web App</option>
				<option>Standalone Desktop App</option>
				<option>Photopea Plugin</option>
				<option>Photoshop Plugin</option>
			</select>
		</div>

		<div>
			<label for="os" class="block text-sm text-text-bright mb-1">Operating System</label>
			<input
				type="text"
				id="os"
				name="os"
				placeholder="e.g. Windows 11, macOS Sonoma"
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright placeholder:text-text-muted outline-none
					focus:border-accent transition-colors"
			/>
		</div>

		<div>
			<label for="email" class="block text-sm text-text-bright mb-1">Email (optional)</label>
			<input
				type="email"
				id="email"
				name="email"
				maxlength={254}
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright outline-none focus:border-accent transition-colors"
			/>
		</div>

		<div>
			<label for="message" class="block text-sm text-text-bright mb-1">Describe the bug</label>
			<textarea
				id="message"
				name="message"
				required
				maxlength={3000}
				rows={6}
				placeholder="What happened? What did you expect to happen?"
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text-bright placeholder:text-text-muted outline-none
					focus:border-accent transition-colors resize-y"
			></textarea>
		</div>

		<button
			type="submit"
			class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
				rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer"
		>
			Submit Report
		</button>
	</form>
</article>
