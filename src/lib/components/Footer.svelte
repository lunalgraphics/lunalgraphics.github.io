<script lang="ts">
	import { siteConfig } from '$lib/config';

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full bg-surface-dark px-4 py-4" style="view-transition-name: footer;">
	<!-- Navigation links -->
	<nav aria-label="Footer navigation" class="mb-3">
		<ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-heading text-xs sm:text-sm">
			<li>
				<a href="/about" class="text-text-bright hover:text-accent transition-colors">
					ABOUT US
				</a>
			</li>
			<li>
				<a href="/blog" class="text-text-bright hover:text-accent transition-colors">
					BLOG
				</a>
			</li>
			<li>
				<a href="/sociallinks" class="text-text-bright hover:text-accent transition-colors">
					SOCIAL
				</a>
			</li>
			<li>
				<a href="/contact" class="text-text-bright hover:text-accent transition-colors">
					CONTACT
				</a>
			</li>
		</ul>
	</nav>

	<!-- External links -->
	<div class="flex flex-wrap items-center justify-center gap-4 mb-2 text-xs">
		<a href={siteConfig.discord} target="_blank" rel="noopener noreferrer"
			class="text-text-muted hover:text-accent transition-colors" aria-label="Discord">
			Discord
		</a>
		<a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
			class="text-text-muted hover:text-accent transition-colors" aria-label="GitHub">
			GitHub
		</a>
		<a href={siteConfig.patreon} target="_blank" rel="noopener noreferrer"
			class="text-text-muted hover:text-accent transition-colors" aria-label="Patreon">
			Support Us
		</a>
		<a href="/blog/rss.xml" class="text-text-muted hover:text-accent transition-colors" aria-label="RSS Feed">
			RSS
		</a>
	</div>

	<!-- Copyright -->
	<p class="text-center text-[10px] text-text-muted">&copy; {currentYear} Lunal Graphics</p>
</footer>
