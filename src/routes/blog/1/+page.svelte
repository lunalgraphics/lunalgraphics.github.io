<script lang="ts">
	import { BlogPost } from '$lib/components';
	import banner from '$lib/assets/images/shockwave.jpg';
</script>

<BlogPost
	title="New Site, New Blog"
	date="2024-07-25"
	description="Let's talk about the new website!"
	{banner}
	bannerAlt="Shockwave effect"
	author="Yikuan Sun"
>
	<p>So...</p>
	<p>
		New website is here. Not too much to say about it.
		I've tried to revamp the website before, but there was always something missing.
		Now, using SvelteKit, I think I've finally made it into something scalable and beautiful.
	</p>
	<p>
		So that's basically it. Sorry Lunal Graphics hasn't been releasing much new stuff lately.
		That pattern will not continue. Expect some exciting stuff this year!
	</p>
	<p>Have a great day!</p>
</BlogPost>
