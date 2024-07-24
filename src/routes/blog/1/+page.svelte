<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/shockwave.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>New Site, New Blog</h1>
        <p>
            Let's talk about the new website!<br />
            Blog Entry 1<br />
            2024-07-25
        </p>
    </div>
</div>

<div class="infosection">
    So... <br /> <br />
    New website is here. Not too much to say about it.
    I've tried to revamp the website before, but there
    was always something missing. Now, using SvelteKit,
    I think I've finally made it into something scalable
    and beautiful. <br /> <br />
    So that's basically it. Sorry Lunal Graphics hasn't
    been releasing much new stuff lately. That pattern
    will not continue. Expect some exciting stuff this
    year! <br /> <br />
    Have a great day! <br /> <br />
    <a href="{base}/blog">Back to the blog</a>
</div>

<svelte:head>
    <title>New Site, New Blog | Blog | Lunal Graphics</title>
    <SocialMetadata
        title="New Site, New Blog | Blog | Lunal Graphics"
        desc="Let's talk about the new website!"
        imgURL={banner}
        pageURL="https://lunalgraphics.github.io"
        imgAlt="Shockwave"
    /> <!-- need to replace with full URLs -->
</svelte:head>