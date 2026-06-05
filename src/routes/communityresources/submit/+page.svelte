<script lang="ts">
	import { SocialMetadata } from '$lib/components';
	import { onMount } from 'svelte';

	let step = $state(0);
	let agreeToGuidelines = $state(false);

	let submissionDetails = $state({
		userId: '',
		email: '',
		author: '',
		name: '',
		description: '',
		b64: '',
		thumbnail64: '',
		type: 'ctpreset'
	});

	let assetFilename = $state('no file selected');
	let thumbnailCanvas: HTMLCanvasElement | undefined = $state();
	let notificationForm: HTMLFormElement | undefined = $state();
	let resourceId = $state('0000');

	onMount(() => {
		submissionDetails.userId = localStorage.getItem('userId') || '';
		if (!submissionDetails.userId) {
			submissionDetails.userId = 'user' + Math.random().toFixed(5).replace('.', '');
			localStorage.setItem('userId', submissionDetails.userId);
		}
		submissionDetails.author = localStorage.getItem('displayName') || '';
		submissionDetails.email = localStorage.getItem('email') || '';
	});

	function saveUserCredentials() {
		localStorage.setItem('displayName', submissionDetails.author);
		localStorage.setItem('email', submissionDetails.email);
	}

	async function handleFileUpload(e: Event): Promise<string> {
		const input = e.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return '';
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.addEventListener('loadend', () => {
				resolve(reader.result as string);
			});
			reader.readAsDataURL(file);
		});
	}

	function getFileExt(type: string): string {
		switch (type) {
			case 'ctpreset': return '.ctxml';
			case 'srtexture': return '.png';
			case 'pgf2preset': return '.pgf2';
			default: return '';
		}
	}

	async function submitForm() {
		const response = await fetch('https://lunalgraphics-community-resources-a.vercel.app/api/v2/resources', {
			method: 'POST',
			body: JSON.stringify(submissionDetails),
			headers: { 'Content-Type': 'application/json' }
		});
		const json = await response.json();
		resourceId = json.data;
		notificationForm?.submit();
	}

	const guidelines = `- SUBMISSION GUIDELINES -

1. ORIGINAL WORK
Submitted resources must be your original work. You may use assets created by other people (stock images, etc.) as long as you have permission to do so.

2. SUBMISSION QUALITY
Submitted resources must be made for the singular purpose of improving people's artwork. Think: would I use this in my own work? Thus, no obscene content is allowed.

3. SPAM
Do not spam the form, or your submissions will be blocked.

Failure to adhere to any of the above guidelines will prevent your submission from being approved.`;
</script>

<SocialMetadata title="Submit a Resource" description="Submit a community resource to Lunal Graphics." />

<article class="max-w-2xl mx-auto px-6 py-16">
	<!-- Step 0: Guidelines -->
	{#if step === 0}
		<section class="space-y-6">
			<h1 class="text-3xl font-heading text-white">Before we start...</h1>
			<p class="text-text">Please read the following guidelines for submissions to Lunal Graphics Community Resources.</p>
			<textarea
				readonly
				rows={14}
				class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
					text-text text-sm font-mono resize-y outline-none"
			>{guidelines}</textarea>
			<label class="flex items-center gap-2 text-text cursor-pointer">
				<input type="checkbox" bind:checked={agreeToGuidelines} class="accent-accent" />
				I have read the statements above and agree to follow them.
			</label>
			<button
				disabled={!agreeToGuidelines}
				onclick={() => { step = 1; }}
				class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
					rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer
					disabled:border-text-muted disabled:text-text-muted disabled:cursor-not-allowed disabled:hover:bg-surface"
			>
				Continue
			</button>
		</section>

	<!-- Step 1: User Info -->
	{:else if step === 1}
		<section class="space-y-6">
			<button onclick={() => { step--; }} class="text-sm text-accent hover:text-accent-hover bg-transparent border-none cursor-pointer">← Back</button>
			<h1 class="text-3xl font-heading text-white">Tell Us More About You</h1>
			<p class="text-text">This helps you earn recognition and lets us contact you if necessary. Your email will not be publicly displayed.</p>

			<div class="space-y-4">
				<div>
					<label for="email" class="block text-sm text-text-bright mb-1">Your Email (optional)</label>
					<input
						type="email"
						id="email"
						bind:value={submissionDetails.email}
						placeholder="cool_artist@example.com"
						class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
							text-text-bright placeholder:text-text-muted outline-none focus:border-accent transition-colors"
					/>
				</div>
				<div>
					<label for="author" class="block text-sm text-text-bright mb-1">Display Name</label>
					<input
						type="text"
						id="author"
						bind:value={submissionDetails.author}
						placeholder="How would you like to be credited? Leave blank to remain anonymous."
						class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
							text-text-bright placeholder:text-text-muted outline-none focus:border-accent transition-colors"
					/>
				</div>
			</div>

			<button
				onclick={() => { step = 2; saveUserCredentials(); }}
				class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
					rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer"
			>
				Continue
			</button>
		</section>

	<!-- Step 2: Resource Details -->
	{:else if step === 2}
		<section class="space-y-6">
			<button onclick={() => { step--; }} class="text-sm text-accent hover:text-accent-hover bg-transparent border-none cursor-pointer">← Back</button>
			<h1 class="text-3xl font-heading text-white">What's it About?</h1>
			<p class="text-text">Tell us about the resource you're uploading!</p>

			<div class="space-y-4">
				<div>
					<label for="res-name" class="block text-sm text-text-bright mb-1">Title</label>
					<input
						type="text"
						id="res-name"
						bind:value={submissionDetails.name}
						placeholder="What should we call your resource?"
						class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
							text-text-bright placeholder:text-text-muted outline-none focus:border-accent transition-colors"
					/>
				</div>
				<div>
					<label for="res-type" class="block text-sm text-text-bright mb-1">Type</label>
					<select
						id="res-type"
						bind:value={submissionDetails.type}
						class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
							text-text-bright outline-none focus:border-accent transition-colors"
					>
						<option value="ctpreset">Color Theater Preset</option>
						<option value="srtexture">Sprite Replicator Texture</option>
						<option value="pgf2preset">Progen Flares 2 Preset</option>
					</select>
				</div>
				<div>
					<label for="res-desc" class="block text-sm text-text-bright mb-1">Description</label>
					<input
						type="text"
						id="res-desc"
						bind:value={submissionDetails.description}
						placeholder="Provide a short statement about how the resource should be used."
						class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
							text-text-bright placeholder:text-text-muted outline-none focus:border-accent transition-colors"
					/>
				</div>
			</div>

			<button
				disabled={!(submissionDetails.name && submissionDetails.description)}
				onclick={() => { step = 3; }}
				class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
					rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer
					disabled:border-text-muted disabled:text-text-muted disabled:cursor-not-allowed disabled:hover:bg-surface"
			>
				Continue
			</button>
		</section>

	<!-- Step 3: File Upload -->
	{:else if step === 3}
		<section class="space-y-6">
			<button onclick={() => { step--; }} class="text-sm text-accent hover:text-accent-hover bg-transparent border-none cursor-pointer">← Back</button>
			<h1 class="text-3xl font-heading text-white">Upload Your Files</h1>

			<div class="space-y-4">
				<div>
					<label class="inline-block px-5 py-2.5 font-heading text-sm text-text-bright
						border-2 border-text-bright rounded bg-surface hover:bg-surface-light
						transition-colors cursor-pointer">
						Upload the asset
						<input
							type="file"
							class="hidden"
							accept={getFileExt(submissionDetails.type)}
							onchange={async (e) => {
								const input = e.target as HTMLInputElement;
								if (!input.files?.length) return;
								const dataURL = await handleFileUpload(e);
								assetFilename = input.files[0].name;
								submissionDetails.b64 = dataURL.split(';base64,')[1];
							}}
						/>
					</label>
					<p class="text-sm text-text-muted mt-2 font-mono">{assetFilename}</p>
				</div>

				<div>
					<label class="inline-block px-5 py-2.5 font-heading text-sm text-text-bright
						border-2 border-text-bright rounded bg-surface hover:bg-surface-light
						transition-colors cursor-pointer">
						Upload a thumbnail image
						<input
							type="file"
							class="hidden"
							accept="image/*"
							onchange={async (e) => {
								const dataURL = await handleFileUpload(e);
								if (!dataURL) return;
								const img = new Image();
								img.src = dataURL;
								img.addEventListener('load', () => {
									if (!thumbnailCanvas) return;
									const aspectRatio = img.width / img.height;
									const ctx = thumbnailCanvas.getContext('2d');
									if (!ctx) return;
									ctx.drawImage(img, 0, 0, 480, 480 / aspectRatio);
									const finalDataURL = thumbnailCanvas.toDataURL('image/png');
									submissionDetails.thumbnail64 = finalDataURL.split(';base64,')[1];
								});
							}}
						/>
					</label>
					<canvas
						bind:this={thumbnailCanvas}
						width={480}
						height={270}
						class="block mt-4 rounded border border-surface-light"
						aria-label="Thumbnail preview"
					></canvas>
				</div>
			</div>

			<button
				disabled={!(submissionDetails.b64 && submissionDetails.thumbnail64)}
				onclick={() => { submitForm(); step = 4; }}
				class="px-6 py-3 font-heading text-sm text-text-bright border-2 border-text-bright
					rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer
					disabled:border-text-muted disabled:text-text-muted disabled:cursor-not-allowed disabled:hover:bg-surface"
			>
				Submit
			</button>
		</section>

	<!-- Step 4: Success -->
	{:else if step === 4}
		<section class="space-y-4">
			<h1 class="text-3xl font-heading text-white">Congratulations!</h1>
			<p class="text-text">
				Your resource has been submitted.
				It may take a few days for your submission to be approved.
				Feel free to <a href="/contact">contact us</a> with any questions.
			</p>
		</section>
	{/if}
</article>

<!-- Hidden notification form -->
<form
	class="hidden"
	action="https://formspree.io/f/xrgjqgqq"
	method="POST"
	bind:this={notificationForm}
	target="_blank"
>
	<input type="hidden" name="email" value={submissionDetails.email} />
	<input type="hidden" name="topic" value="New submission to Community Resources" />
	<input type="hidden" name="message" value="Author: {submissionDetails.author} (ID: {submissionDetails.userId}) | Resource ID: {resourceId} | View PR: https://github.com/lunalgraphics/community-resources/pulls?q={resourceId}" />
</form>
