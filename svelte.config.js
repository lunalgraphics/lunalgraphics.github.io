import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: "ignore",
		},
		paths: {
			base: "",
		},
	},
	onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y-')) return;
        handler(warning);
    },
};

export default config;
