<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-dark.min.css';

	let {
		code,
		language
	}: {
		code: string;
		language?: string;
	} = $props();

	let highlighted = $derived.by(() => {
		if (language && hljs.getLanguage(language)) {
			return hljs.highlight(code, { language }).value;
		}
		return hljs.highlightAuto(code).value;
	});
</script>

<div class="rounded-lg overflow-hidden my-4">
	{#if language}
		<div class="bg-surface-light px-4 py-1.5 text-xs text-text-muted font-mono uppercase">
			{language}
		</div>
	{/if}
	<pre class="bg-surface-dark p-4 overflow-x-auto text-sm leading-relaxed"><code class="hljs">{@html highlighted}</code></pre>
</div>
