<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { NavSection } from '$lib/config';

	let { section }: { section: NavSection } = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="px-3 py-2 text-sm text-text-bright font-heading cursor-pointer
			hover:text-accent transition-colors duration-150 select-none"
	>
		{section.title}
	</DropdownMenu.Trigger>

	<DropdownMenu.Portal>
		<DropdownMenu.Content
			class="z-[100] min-w-[180px] rounded-md border-0
				bg-surface-dark/80 px-0 py-2 shadow-sm backdrop-blur-sm animate-in fade-in-0 zoom-in-95"
			sideOffset={8}
			preventScroll={false}
		>
			{#each section.links as link}
				<DropdownMenu.Item
					class="block text-sm text-text-bright
						hover:bg-surface-light hover:text-accent transition-colors
						duration-150 cursor-pointer outline-none
						data-[highlighted]:bg-surface-light data-[highlighted]:text-accent"
				>
					<a href={link.href} class="block w-full px-5 py-2"
						target={link.external ? '_blank' : '_self'}
						rel={link.external ? 'noopener noreferrer' : ''}
					>
						{link.title}
					</a>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
