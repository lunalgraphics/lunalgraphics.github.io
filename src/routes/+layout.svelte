<script lang="ts">
	import '../app.css';
	import { navigation, siteConfig } from '$lib/config';
	import { NavDropdown, MobileNav, Footer } from '$lib/components';
	import { onNavigate } from '$app/navigation';
	import Logo from '$lib/assets/images/logo_cool.png';

	let { children } = $props();

	let scrollY = $state(0);
	let shrink = $derived(scrollY > 200);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:window bind:scrollY />

<!-- Top Navigation Bar -->
<nav
	id="topbar"
	aria-label="Main navigation"
	class="fixed top-0 w-full z-50 bg-surface-dark/70 backdrop-blur-md
		shadow-[0_-4px_14px_rgba(0,0,0,0.6)] transition-all duration-300
		{shrink ? 'h-[50px] bg-surface-dark' : 'h-[50px] md:h-[64px]'}"
	style="view-transition-name: topbar;"
>
	<div class="h-full max-w-7xl mx-auto flex items-center justify-between px-4">
		<!-- Logo -->
		<a href="/" aria-label="Lunal Graphics home" class="flex-shrink-0">
			<img
				src={Logo}
				alt="Lunal Graphics"
				class="transition-all duration-300 select-none
					{shrink ? 'h-[40px] w-[40px]' : 'h-[40px] w-[40px] md:h-[50px] md:w-[50px]'}"
				draggable="false"
			/>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex items-center gap-1">
			{#each navigation as section}
				<NavDropdown {section} />
			{/each}
		</div>

		<!-- Mobile Navigation -->
		<div class="md:hidden">
			<MobileNav />
		</div>
	</div>
</nav>

<!-- Main Content (offset for fixed nav) -->
<main class="pt-[50px] md:pt-[64px] min-h-screen">
	{@render children()}
</main>

<!-- Footer -->
<Footer />

<!-- Analytics -->
<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={siteConfig.gaId}"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '{siteConfig.gaId}');
	</script>
</svelte:head>
