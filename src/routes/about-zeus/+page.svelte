<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/zeusBanner.jpg";
    import example1before from "$lib/assets/examples/zeus1before.jpg";
    import example1after from "$lib/assets/examples/zeus1after.jpg";
    import example2before from "$lib/assets/examples/zeus2before.jpg";
    import example2after from "$lib/assets/examples/zeus2after.jpg";
    import example3before from "$lib/assets/examples/zeus3before.jpg";
    import example3after from "$lib/assets/examples/zeus3after.jpg";
    import ImageSlider from "svelte-imageslider";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Zeus</h1>
        <p>Powerful Lightning/Electricity Effects</p>
        <a href="{base}/weblauncher#zeus">
            <button>Try it on the Web</button>
        </a>
        <a href="{base}/ghdownloads#zeus">
            <button>Download</button>
        </a>
    </div>
</div>

<div class="infosection">
    <h1>What is Zeus?</h1>
    <br />
    <ImageSlider src1={example1before} src2={example1after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Zeus can be used to create electric energy effects.
        That can mean lightning, laser beams, or even twig patterns.
        Assets created with Zeus can instantly be dropped onto a composite,
        ready for immediate use.
    </p>
    <h1>Powerful Glow</h1>
    <br />
    <ImageSlider src1={example2before} src2={example2after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Zeus uses the same glow algorithm as SuperBloom, creating realistic light falloff.
        However, Zeus has an additional feature: Glow Distortion, which can be used to create haze
        or make an electric strand seem even more energetic and unstable.
    </p>
    <h1>Use Zeus Directly in Photopea</h1>
    <p>
        Zeus is available as a Photopea plugin.
        Learn how to install it <a href="{base}/blog/2">here</a>.
    </p>
</div>

<svelte:head>
    <title>Zeus | Lunal Graphics</title>
    <SocialMetadata
        title="Zeus | Lunal Graphics"
        desc="Zeus lets artists create intense electrical energy effects."
        imgURL="https://lunalgraphics.github.io/socialPreviews/zeus.png"
        pageURL="https://lunalgraphics.github.io/about-zeus"
        imgAlt="Artwork created with Zeus"
    />
</svelte:head>