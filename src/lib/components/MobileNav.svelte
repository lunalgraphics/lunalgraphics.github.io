<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { Menu, X } from '@lucide/svelte';
	import { navigation } from '$lib/config';
	import { page } from '$app/stores';

	let open = $state(false);

	// Close mobile nav on navigation
	$effect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		$page.url.pathname;
		open = false;
	});
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger
		class="inline-flex items-center justify-center rounded-md p-2
			text-text-bright hover:text-accent transition-colors md:hidden"
		aria-label="Open navigation menu"
	>
		<Menu class="h-6 w-6" />
	</Dialog.Trigger>

	<Dialog.Portal>
		<Dialog.Overlay
			class="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm
				animate-in fade-in-0"
		/>
		<Dialog.Content
			class="fixed inset-y-0 left-0 z-[100] w-[280px] bg-surface-dark
				border-r border-surface-light p-6 shadow-xl overflow-y-auto
				animate-in slide-in-from-left"
		>
			<div class="flex items-center justify-between mb-8">
				<span class="font-heading text-lg text-text-bright">Menu</span>
				<Dialog.Close
					class="rounded-md p-1 text-text-muted hover:text-accent transition-colors"
					aria-label="Close navigation menu"
				>
					<X class="h-5 w-5" />
				</Dialog.Close>
			</div>

			<nav aria-label="Mobile navigation">
				<a href="/" class="block py-2 text-text-bright hover:text-accent font-heading text-sm">
					Home
				</a>

				{#each navigation as section}
					<div class="mt-6">
						<h3 class="text-xs font-heading text-text-muted uppercase tracking-wider mb-2">
							{section.title}
						</h3>
						<ul class="space-y-1">
							{#each section.links as link}
								<li>
									{#if link.external}
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											class="block py-1.5 px-2 rounded text-sm text-text-bright
												hover:bg-surface-light hover:text-accent transition-colors"
										>
											{link.title}
										</a>
									{:else}
										<a
											href={link.href}
											class="block py-1.5 px-2 rounded text-sm text-text-bright
												hover:bg-surface-light hover:text-accent transition-colors"
										>
											{link.title}
										</a>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
