<script lang="ts">
	import { BlogPost, CodeBlock } from '$lib/components';
	import banner from '$lib/assets/blog/4/banner.png';
	import { onMount } from 'svelte';

	let peaFrame: HTMLIFrameElement | undefined = $state();
	let peaLoaded = $state(false);

	let peaConfig = $state(JSON.stringify({
		resources: [],
		environment: { theme: 3, lang: 'en', plugins: [] }
	}, null, 4));

	let consoleHistory = $state<{ input: string; output: string }[]>([]);
	let currentScript = $state('app.echoToOE("hello world");');

	function getPeaUrl(config: string): string {
		return `https://www.photopea.com#${encodeURIComponent(config)}`;
	}

	function refreshPea() {
		if (peaFrame) {
			peaLoaded = false;
			peaFrame.src = getPeaUrl(peaConfig);
		}
	}

	async function runScript(script: string): Promise<string> {
		return new Promise((resolve) => {
			if (!peaFrame?.contentWindow) {
				resolve('Error: Photopea not loaded');
				return;
			}
			const results: string[] = [];
			function onMessage(e: MessageEvent) {
				if (e.source !== peaFrame?.contentWindow) return;
				if (e.data === 'done') {
					window.removeEventListener('message', onMessage);
					resolve(results.join('\n'));
				} else {
					results.push(typeof e.data === 'string' ? e.data : JSON.stringify(e.data));
				}
			}
			window.addEventListener('message', onMessage);
			peaFrame.contentWindow.postMessage(script, '*');
		});
	}

	async function executeScript() {
		if (currentScript.trim().length === 0) return;
		const output = await runScript(currentScript);
		consoleHistory = [...consoleHistory, { input: currentScript, output }];
		currentScript = '';
	}

	function handleConsoleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			executeScript();
		}
	}

	onMount(() => {});
</script>

<BlogPost
	title="Photopea Playground"
	date="2024-07-25"
	description="Experiment with the Photopea API."
	{banner}
	bannerAlt="Photopea Playground"
	author="Yikuan Sun"
>
	<p>
		Use the following tools to experiment with the Photopea configuration and scripting.
		<a href="https://www.photopea.com/api/" target="_blank" rel="noopener noreferrer">
			Learn more about the Photopea API
		</a>
	</p>

	<!-- Config Editor -->
	<h2>Config</h2>
	<textarea
		bind:value={peaConfig}
		rows={8}
		class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
			text-text-bright font-mono text-sm outline-none focus:border-accent
			transition-colors resize-y"
	></textarea>
	<button
		onclick={refreshPea}
		class="mt-2 px-4 py-2 font-heading text-sm text-text-bright border border-text-bright
			rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer"
	>
		Refresh Photopea
	</button>

	<!-- Photopea Embed -->
	{#if !peaLoaded}
		<div class="w-full h-[500px] bg-surface-dark border border-surface-light rounded
			flex items-center justify-center text-text-muted my-4">
			Loading Photopea...
		</div>
	{/if}
	<iframe
		bind:this={peaFrame}
		src={getPeaUrl(peaConfig)}
		title="Photopea Editor"
		class="w-full h-[500px] border border-surface-light rounded my-4"
		class:hidden={!peaLoaded}
		onload={() => { peaLoaded = true; }}
	></iframe>

	<!-- Console -->
	<h2>Console</h2>

	{#if consoleHistory.length > 0}
		<div class="space-y-3">
			{#each consoleHistory as entry, i}
				<div class="text-sm space-y-1">
					<p class="text-text-muted font-mono">In [{i}]:</p>
					<CodeBlock code={entry.input} language="javascript" />
					<p class="text-text-muted font-mono">Out[{i}]:</p>
					<CodeBlock code={entry.output} language="json" />
				</div>
			{/each}
		</div>
	{/if}

	<div class="mt-4">
		<p class="text-text-muted font-mono text-sm mb-1">In [{consoleHistory.length}]:</p>
		<textarea
			bind:value={currentScript}
			onkeydown={handleConsoleKeydown}
			rows={2}
			placeholder="Type a script and press Enter..."
			class="w-full px-4 py-3 bg-surface-dark border border-surface-light rounded
				text-text-bright font-mono text-sm outline-none focus:border-accent
				transition-colors resize-y"
		></textarea>
		<button
			onclick={executeScript}
			class="mt-2 px-4 py-2 font-heading text-sm text-text-bright border border-text-bright
				rounded bg-surface hover:bg-surface-light transition-colors cursor-pointer"
		>
			Run
		</button>
	</div>
</BlogPost>
