import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { svelteSitemap } from 'svelte-sitemap';
import { siteConfig } from './src/lib/config';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		svelteSitemap({
			domain: siteConfig.url,
		}),
	],
});
