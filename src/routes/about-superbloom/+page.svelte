<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/superbloomBanner.jpg";
    import example1before from "$lib/assets/examples/superbloom1before.jpg";
    import example1after from "$lib/assets/examples/superbloom1after.jpg";
    import example2before from "$lib/assets/examples/superbloom2before.jpg";
    import example2after from "$lib/assets/examples/superbloom2after.jpg";
    import example3before from "$lib/assets/examples/superbloom3before.jpg";
    import example3after from "$lib/assets/examples/superbloom3after.jpg";
    import example4before from "$lib/assets/examples/superbloom4before.jpg";
    import example4after from "$lib/assets/examples/superbloom4after.jpg";
    import ImageSlider from "svelte-imageslider";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>SuperBloom</h1>
        <p>Photorealistic Bloom & Glow</p>
        <a href="{base}/weblauncher#superbloom">
            <button>Try it on the Web</button>
        </a>
        <a target="_blank" href="https://www.patreon.com/posts/superbloom-app-1-80464954">
            <button>Download</button>
        </a>
    </div>
</div>

<div class="infosection">
    <h1>What is SuperBloom?</h1>
    <br />
    <ImageSlider src1={example1before} src2={example1after} caption1="Before (photo from Unsplash)" caption2="After"></ImageSlider>
    <p>
        SuperBloom lets artists create beautiful bloom and glow effects easily.
        Whether it be for adding photorealism to a light-based image,
        or for adding a dreamy haze to fantasy artwork, SuperBloom is
        the top choice of artists for a variety of situations.
    </p>
    <h1>Advanced Colorization</h1>
    <br />
    <ImageSlider src1={example2before} src2={example2after} caption1="Before (photo from Unsplash)" caption2="After"></ImageSlider>
    <p>
        SuperBloom lets you pick the color of your glow instantly.
        The colorization algorithm creates photorealistic color-shifting,
        mimicking real light falloff. For example, an orange glow would
        look more yellow towards the center of the light source, and more
        red towards the edges.
    </p>
    <h1>Great for Visual Effects</h1>
    <br />
    <ImageSlider src1={example3before} src2={example3after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Magic or sci-fi VFX looking too plain? SuperBloom makes effects
        seem brighter and more powerful. Whether it be spells, energy balls, laser beams
        or lightsabers, SuperBloom is the way to go.
    </p>
    <h1>Enhance Your 3D Renders</h1>
    <br />
    <ImageSlider src1={example4before} src2={example4after} caption1="Before (Image from Unsplash)" caption2="After"></ImageSlider>
    <p>
        Render looking too flat or unrealistic? SuperBloom adds dimension
        and atmosphere to 3D renders.
    </p>
    <h1>Use SuperBloom Directly in Photopea</h1>
    <p>
        SuperBloom is available as a Photopea plugin.
        Learn how to install it <a href="{base}/blog/2">here</a>.
    </p>
</div>

<svelte:head>
    <title>SuperBloom | Lunal Graphics</title>
    <SocialMetadata
        title="SuperBloom | Lunal Graphics"
        desc="SuperBloom lets artists create beautiful bloom and glow effects easily."
        imgURL="https://lunalgraphics.github.io/socialPreviews/superbloom.png"
        pageURL="https://lunalgraphics.github.io/about-superbloom"
        imgAlt="Image created with SuperBloom"
    />
</svelte:head>