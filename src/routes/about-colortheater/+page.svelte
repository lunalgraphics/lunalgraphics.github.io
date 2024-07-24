<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/colortheaterBanner.jpg";
    import ImageSlider from "svelte-imageslider";
    import example1before from "$lib/assets/examples/colortheater1before.jpg";
    import example1after from "$lib/assets/examples/colortheater1after.jpg";
    import example2before from "$lib/assets/examples/colortheater2before.jpg";
    import example2after from "$lib/assets/examples/colortheater2after.jpg";
    import example3before from "$lib/assets/examples/colortheater3before.jpg";
    import example3after from "$lib/assets/examples/colortheater3after.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Color Theater</h1>
        <p>Simple, Powerful Color Grading</p>
        <a href="{base}/weblauncher#colortheater">
            <button>Try it on the Web</button>
        </a>
        <a href="{base}/ghdownloads#colortheater">
            <button>Download</button>
        </a>
    </div>
</div>

<div class="infosection">
    <h1>What is Color Theater?</h1>
    <br />
    <ImageSlider src1={example1before} src2={example1after} caption1="Before (created with Sprite Replicator)" caption2="After"></ImageSlider>
    <p>
        Color Theater lets artists create beautiful color grades quickly.
        They can also save their color grades as presets which can be reused
        and shared with the community.
    </p>
    <h1>Dramatic Split-Toning</h1>
    <br />
    <ImageSlider src1={example2before} src2={example2after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Color Theater's key feature, split-toning, allows you to add different
        tints to the highlights and shadows of your image. You get full control
        over the intensity and balance of the effect.
    </p>
    <h1>Powerful Vignettes</h1>
    <br />
    <ImageSlider src1={example3before} src2={example3after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Color Theater allows you to create a vignette effect in just
        a few clicks. You get full control over the size, intensity, color,
        and blend mode of the vignette.
    </p>

    <h1>Legacy Presets</h1>
    <p>
        Color Theater 2.0.0 no longer contains built-in presets, as it
        is transitioning to a new preset format {`(ctxml files instead of
        cmtx files)`}. If you'd like to use the old built-in presets from
        version 1, I have recreated them as ctxml files, and they can be
        downloaded <a target="_blank" href="https://drive.google.com/drive/folders/1NVDTVLFN9co4DSKvrM8wy6L0lBhik9SF">here</a>.
    </p>

    <h1>Use Color Theater Directly in Photopea</h1>
    <p>
        Color Theater is available as a Photopea plugin.
        Learn how to install it <a href="{base}/blog/2">here</a>.
    </p>
</div>

<svelte:head>
    <title>Color Theater | Lunal Graphics</title>
    <SocialMetadata
        title="Color Theater | Lunal Graphics"
        desc="Color Theater lets artists create beautiful color grades quickly."
        imgURL="https://lunalgraphics.github.io/socialPreviews/colortheater.png"
        pageURL="https://lunalgraphics.github.io/about-colortheater"
        imgAlt="Artwork created with Color Theater"
    />
</svelte:head>