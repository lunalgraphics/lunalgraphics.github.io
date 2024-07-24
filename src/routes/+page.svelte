<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/energyBall2023.jpg";
    import zeus from "$lib/assets/images/zeusBanner.jpg";
    import sR from "$lib/assets/images/spritereplicatorBanner.jpg";
    import superbloom from "$lib/assets/images/superbloomBanner.jpg";
    import colortheater from "$lib/assets/images/colortheaterBanner.jpg";
    import progenflares2 from "$lib/assets/images/progenflares2Banner.jpg";
    import Modal from "$lib/utils/Modal.svelte";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";

    let movieModalOpen = false;
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1 style="font-size: 64px;">REALIZE YOUR DREAMS</h1>
        <p style="font-size: 25px;">Helping digital artists create without barriers.</p>
        <button on:click={() => { movieModalOpen = true; }}>Watch the Demo Reel</button>
    </div>
</div>

<div class="infosection">
    <h1>What's New</h1>
    <p>
        <li>Community Resources are now available! Share your assets with the community <a href="{base}/communityresources">here</a>.</li>
        <li>Built-in presets are back in Color Theater! Try out v2.1.0 <a href="{base}/about-colortheater">here</a>.</li>
        <li>Sprite Replicator 4.0.0 is out now! Learn about the new 3D workspace <a href="{base}/about-spritereplicator">here</a>.</li>
        <li>Color Theater 2.0.0 is out now! Learn more <a href="{base}/about-colortheater">here</a>.</li>
        <li>Lunal Graphics has a new website! Feel free to look around.</li>
        <br /> <br />
        <a href="{base}/blog">Read the blog</a>
    </p>
    <br /> <br />
    <h1>Our Products</h1>
    <br />
    <a href="{base}/about-zeus" class="productCard" style="background-image: url({zeus});">
        <h2>Zeus</h2>
        <p>Electrical Energy Effects</p>
    </a>
    <a href="{base}/about-spritereplicator" class="productCard" style="background-image: url({sR});">
        <h2>Sprite Replicator</h2>
        <p>Advanced particle Workflow</p>
    </a>
    <a href="{base}/about-colortheater" class="productCard" style="background-image: url({colortheater});">
        <h2>Color Theater</h2>
        <p>Quick & Effective Color Grading</p>
    </a>
    <a href="{base}/about-superbloom" class="productCard" style="background-image: url({superbloom});">
        <h2>SuperBloom</h2>
        <p>Photorealistic Bloom & Glow</p>
    </a>
    <a href="{base}/about-progenflares2" class="productCard" style="background-image: url({progenflares2});">
        <h2>Progen Flares 2</h2>
        <p>Beautiful Lens Flares</p>
    </a>
    <br /> <br />
    <h1>Get in Touch</h1>
    <p>
        Feel free to
        <a href="{base}/contact">contact us</a>,
        <a href="{base}/sociallinks">follow us on social media</a>,
        or
        <a href="https://discord.gg/NqcVDCcqd4" target="_blank">join our discord server</a>.
    </p>
</div>

<Modal bind:open={movieModalOpen} style="padding: 0; overflow: hidden;">
    <iframe style="width: 960px; aspect-ratio: 16 / 9; max-width: 100vw; max-height: 100vh;" src="https://www.youtube.com/embed/iTLwogYlHIg?si=0wlCBE5ceEXeqi0e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</Modal>

<style>
    .productCard {
        box-sizing: border-box;
        padding: 80px 0;
        text-align: center;
        background-size: cover;
        background-position: center;
        transition: font-size 0.3s;
        color: white;
        text-decoration: none!important;
        display: block;
    }

    .productCard:hover {
        font-size: 24px;
        cursor: pointer;
    }
</style>

<svelte:head>
    <title>Lunal Graphics</title>
    <SocialMetadata
        title="Lunal Graphics"
        desc="Creating free creative software for digital artists."
        imgURL="https://lunalgraphics.github.io/socialPreviews/homepage.png"
        pageURL="https://lunalgraphics.com/"
        imgAlt="Lunal Graphics logo"
    />
</svelte:head>