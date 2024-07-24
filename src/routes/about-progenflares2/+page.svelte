<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/progenflares2Banner.jpg";
    import example1before from "$lib/assets/examples/progenflares21before.jpg";
    import example1after from "$lib/assets/examples/progenflares21after.jpg";
    import example2before from "$lib/assets/examples/progenflares22before.jpg";
    import example2after from "$lib/assets/examples/progenflares22after.jpg";
    import screenshot1 from "$lib/assets/examples/progenflares23.jpg";
    import ImageSlider from "svelte-imageslider";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Progen Flares 2</h1>
        <p>Beautiful, Fully-Customizable Lens Flares</p>
        <a href="{base}/weblauncher#progenflares2">
            <button>Try it on the Web</button>
        </a>
        <a target="_blank" href="https://www.patreon.com/posts/progen-flares-2-106642986">
            <button>Download</button>
        </a>
    </div>
</div>

<div class="infosection">
    <h1>What is Progen Flares 2?</h1>
    <br />
    <ImageSlider src1={example1before} src2={example1after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Progen Flares 2 is <i>the only</i> free, cross-platform lens flare studio
        which gives artists complete control over their flares.
        Not in the mood for flare-building? Progen Flares 2 also includes dozens of
        beautiful built-in presets. Pick one and enjoy.
    </p>
    <h1>Cinematic Looks</h1>
    <br />
    <ImageSlider src1={example2before} src2={example2after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Lens flare is often used in films and television. Thus, Progen Flares 2 is the
        perfect tool for making your artwork look more cinematic. Just make sure not to
        go overboard: then you'll end up looking like J. J. Abrams!
    </p>
    <h1>Edit on Top of Your Image</h1>
    <br />
    <img src={screenshot1} alt={"The innovative Reference Image feature of Progen Flares 2"} style="width: 100%;">
    <p>
        Progen Flares 2 has an innovative Reference Image feature.
        Import your base artwork, and see how your lens flare would look on top of that image:
        all without ever leaving the app.
    </p>
    <h1>Use Progen Flares 2 Directly in Photopea</h1>
    <p>
        Progen Flares 2 is available as a Photopea plugin.
        Learn how to install it <a href="{base}/blog/2">here</a>.
    </p>
</div>

<svelte:head>
    <title>Progen Flares 2 | Lunal Graphics</title>
    <SocialMetadata
        title="Progen Flares 2 | Lunal Graphics"
        desc="Progen Flares 2 lets artists create beautiful custom lens flares."
        imgURL="https://lunalgraphics.github.io/socialPreviews/progenflares2.png"
        pageURL="https://lunalgraphics.github.io/about-progenflares2"
        imgAlt="Image created with Progen Flares 2"
    />
</svelte:head>