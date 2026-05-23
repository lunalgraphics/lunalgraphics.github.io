<script lang="ts">
	let {
		before,
		after,
		beforeAlt = 'Before',
		afterAlt = 'After'
	}: {
		before: string;
		after: string;
		beforeAlt?: string;
		afterAlt?: string;
	} = $props();

	let position = $state(50);
	let dragging = $state(false);
	let container: HTMLDivElement | undefined = $state();
	let beforeError = $state(false);
	let afterError = $state(false);
	let hasError = $derived(beforeError || afterError);

	function updatePosition(clientX: number) {
		if (!container) return;
		const rect = container.getBoundingClientRect();
		const x = clientX - rect.left;
		position = Math.max(0, Math.min(100, (x / rect.width) * 100));
	}

	function onPointerDown(e: PointerEvent) {
		dragging = true;
		updatePosition(e.clientX);
	}

	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;
		updatePosition(e.clientX);
	}

	function onPointerUp() {
		dragging = false;
	}

	function onKeyDown(e: KeyboardEvent) {
		const step = e.shiftKey ? 10 : 1;
		if (e.key === 'ArrowLeft') {
			e.preventDefault();
			position = Math.max(0, position - step);
		} else if (e.key === 'ArrowRight') {
			e.preventDefault();
			position = Math.min(100, position + step);
		}
	}
</script>

<div
	bind:this={container}
	class="relative w-full overflow-hidden rounded-lg select-none"
	role="figure"
	aria-label="Before and after image comparison"
	onpointermove={onPointerMove}
	onpointerup={onPointerUp}
	onpointerleave={onPointerUp}
>
	{#if hasError}
		<div class="aspect-video bg-surface-light flex items-center justify-center text-text-muted">
			<span>Image could not be loaded</span>
		</div>
	{:else}
		<!-- After image (full width, clipped by position) -->
		<img
			src={after}
			alt={afterAlt}
			class="block w-full h-auto"
			onerror={() => { afterError = true; }}
			draggable="false"
		/>

		<!-- Before image (clipped from left) -->
		<div
			class="absolute inset-0 overflow-hidden"
			style="clip-path: inset(0 {100 - position}% 0 0);"
		>
			<img
				src={before}
				alt={beforeAlt}
				class="block w-full h-auto"
				onerror={() => { beforeError = true; }}
				draggable="false"
			/>
		</div>

		<!-- Divider handle -->
		<div
			class="absolute top-0 bottom-0 w-1 bg-white/80 cursor-col-resize
				-translate-x-1/2 shadow-[0_0_6px_rgba(0,0,0,0.5)]"
			style="left: {position}%;"
			role="slider"
			aria-label="Image comparison slider"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={Math.round(position)}
			tabindex={0}
			onpointerdown={onPointerDown}
			onkeydown={onKeyDown}
		>
			<!-- Handle grip -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
				w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
				<svg class="w-4 h-4 text-surface-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M8 4l-4 8 4 8M16 4l4 8-4 8" />
				</svg>
			</div>
		</div>
	{/if}
</div>
