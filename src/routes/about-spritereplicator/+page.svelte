<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/spritereplicatorBanner.jpg";
    import example1before from "$lib/assets/examples/spritereplicator1before.jpg";
    import example1after from "$lib/assets/examples/spritereplicator1after.jpg";
    import example2before from "$lib/assets/examples/spritereplicator2before.jpg";
    import example2after from "$lib/assets/examples/spritereplicator2after.jpg";
    import example3before from "$lib/assets/examples/spritereplicator3before.jpg";
    import example3after from "$lib/assets/examples/spritereplicator3after.jpg";
    import example4before from "$lib/assets/examples/spritereplicator4before.jpg";
    import example4after from "$lib/assets/examples/spritereplicator4after.jpg";
    import ImageSlider from "svelte-imageslider";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Sprite Replicator</h1>
        <p>Advanced Particle Workflow</p>
        <a href="{base}/weblauncher#spritereplicator">
            <button>Try it on the Web</button>
        </a>
        <a href="{base}/ghdownloads#spritereplicator">
            <button>Download</button>
        </a>
    </div>
</div>

<div class="infosection">
    <h1>What is Sprite Replicator?</h1>
    <br />
    <ImageSlider src1={example1before} src2={example1after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        At its simplist, Sprite Replicator can be used to scatter several copies of an image in 3D space.
        At its best, Sprite Replicator can be used to create complex patterns and visual effects.
        By giving the artist full control over the duplication of an image, Sprite Replicator
        allows for limitless creative possibilities.
    </p>
    <h1>Unique Visual Effects</h1>
    <br />
    <ImageSlider src1={example2before} src2={example2after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Sprite Replicator can be used to intricate visual effects such as smoke and magic energy.
        The Gravity controls add direction to effects such as particle trails and fire.
    </p>
    <h1>Blending Control</h1>
    <br />
    <ImageSlider src1={example3before} src2={example3after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        Sprite Replicator respects the colors and blend modes of your textures.
        This allows for much more detail and control than what could be achieved using a brush.
    </p>
    <h1>Edit in True 3D Space</h1>
    <br />
    <ImageSlider src1={example4before} src2={example4after} caption1="Before" caption2="After"></ImageSlider>
    <p>
        The latest version of Sprite Replicator allows you to replicate your 2D textures
        in real 3D space. This allows for in-camera effects such as lens blur.
    </p>
    <h1>Use Sprite Replicator Directly in Photopea</h1>
    <p>
        Sprite Replicator is available as a Photopea plugin.
        Learn how to install it <a href="{base}/blog/2">here</a>.
    </p>
</div>

<svelte:head>
    <title>Sprite Replicator | Lunal Graphics</title>
    <SocialMetadata
        title="Sprite Replicator | Lunal Graphics"
        desc="Sprite Replicator lets artists create complex patterns or particle effects."
        imgURL="https://lunalgraphics.github.io/socialPreviews/spritereplicator.png"
        pageURL="https://lunalgraphics.github.io/about-spritereplicator"
        imgAlt="Artwork created with Sprite Replicator"
    />
</svelte:head>