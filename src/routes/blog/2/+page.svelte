<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/blog/2/banner.png";
    import step1 from "$lib/assets/blog/2/step1.png";
    import step2 from "$lib/assets/blog/2/step2.png";
    import step3 from "$lib/assets/blog/2/step3.png";
    import step4 from "$lib/assets/blog/2/step4.png";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Installing Plugins in Photopea</h1>
        <p>
            Expanding your photo manipulation toolkit<br />
            Blog Entry 2<br />
            2024-06-27
        </p>
    </div>
</div>

<div class="infosection">
    Plugins are a great way to expand the capabilities of your editor.
    Photopea has more than 40 plugins that you can use to do everything
    from adding emojis to generating energy effects. The following is a
    step-by-step guide to installing and using plugins in Photopea.
    <br /> <br /> <br />
    <h2>Step 1: Open Plugins Menu</h2>
    <br />
    <img src={step1} style="width: 100%" alt="Open from Window -> Plugins" />
    <br />
    First off, open the Plugins menu from <b>Window -{">"} Plugins.</b>
    You will see a catalog of plugins developed by different people.
    <br /> <br /> <br />
    <h2>Step 2: Select Plugins</h2>
    <br />
    <img src={step2} style="width: 100%" alt="Find plugins in the menu" />
    <br />
    There are several ways to search for the perfect plugin.
    For one, you can simply scroll through the catalog and see what catches
    your eye.
    Better so, however, would be to find a category from the left pannel.
    <b>Resources</b> refers to plugins from which can help you import assets -
    think image galleries and whatnot.
    <b>Effects</b> refers to plugins with which you can generate, well, effects
    based on what's already on your document.
    <b>Generate Content</b> plugins will actually generate new things from scratch,
    like charts and QR codes.
    <br /> <br />
    You can find Lunal Graphics plugins by typing "Lunal Graphics" into the
    searchbar at the top.
    <br /> <br /> <br />
    <h2>Step 3: Install</h2>
    <br />
    <img src={step3} style="width: 100%" alt="Find plugins in the menu" />
    <br />
    Once you've found a plugin you like, just click on its thumbnail and press
    <b>Install</b>.
    <br /> <br /> <br />
    <h2>Step 4: Use the Plugin</h2>
    <br />
    <img src={step4} style="width: 100%" alt="Open the plugin using the icon on the side panel" />
    <br />
    Close the Plugins menu using the <b>X</b> at the top-right corner.
    Top open any plugin, click on its icon on the side panel {"(near the Layers panel)"}.
    To resize the plugin window, use the handle at its bottom-left.
    :{")"}
    <br /> <br /> <br />
    <i>If you liked this article, feel free to share it on social media!</i>
    <br /> <br />
    <a href="{base}/blog">Back to the blog</a>
</div>

<svelte:head>
    <title>Installing Plugins in Photopea | Blog | Lunal Graphics</title>
    <SocialMetadata
        title="Installing Plugins in Photopea | Blog | Lunal Graphics"
        desc="Learn how to expand your editing toolkit by installing free plugins in Photopea."
        imgURL={banner}
        pageURL="https://lunalgraphics.github.io"
        imgAlt="Shockwave"
    /> <!-- need to replace with full URLs -->
</svelte:head>