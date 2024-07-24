<script>
    import Logo from "$lib/assets/images/logo_cool.png";
    import { base } from "$app/paths";
    import MenuSection from "$lib/utils/MenuSection.svelte";
    import { onMount } from "svelte";
    import BurgerMenu from "$lib/utils/BurgerMenu.svelte";

    let platform = "desktop";

    function getPlatform() {
        if (window.innerWidth < 690) platform = "mobile";
        else platform = "desktop";
    }

    onMount(() => {
        getPlatform();
        window.addEventListener("resize", getPlatform);
    });
</script>

<div id="topbar">
    <a href="{base}/">
        <img src={Logo} width={50} alt="Lunal Graphics" style="vertical-align: middle;" draggable={false} />
    </a>
    {#if platform == "desktop"}
        <MenuSection title={"PRODUCTS"}>
            <a href="{base}/about-superbloom">SuperBloom</a> <br />
            <a href="{base}/about-spritereplicator">Sprite Replicator</a> <br />
            <a href="{base}/about-zeus">Zeus</a> <br />
            <a href="{base}/about-colortheater">Color Theater</a> <br />
            <a href="{base}/about-progenflares2">Progen Flares 2</a>
        </MenuSection>
        <MenuSection title={"LEARN"}>
            <a href="{base}/videotutorials">Video Tutorials</a>
        </MenuSection>
        <MenuSection title={"NEWS"}>
            <a href="{base}/blog">Blog</a> <br />
            <a href="{base}/sociallinks">Social</a>
        </MenuSection>
        <MenuSection title={"COMMUNITY"}>
            <a href="{base}/communityresources">Community Resources</a> <br />
            <a href="https://discord.gg/NqcVDCcqd4" target="_blank">Join the Discord</a>
        </MenuSection>
        <MenuSection title={"SUPPORT"}>
            <a href="{base}/contact">Contact</a> <br />
            <a href="{base}/bugreport">Report a Bug</a>
        </MenuSection>
    {:else if platform == "mobile"}
        <BurgerMenu>
            <a href="{base}/">Home</a> <br />
            <br />
            <h3>Products</h3>
            <a href="{base}/about-superbloom">SuperBloom</a> <br />
            <a href="{base}/about-spritereplicator">Sprite Replicator</a> <br />
            <a href="{base}/about-zeus">Zeus</a> <br />
            <a href="{base}/about-colortheater">Color Theater</a> <br />
            <a href="{base}/about-progenflares2">Progen Flares 2</a> <br />
            <br />
            <h3>Learn</h3>
            <a href="{base}/videotutorials">Video Tutorials</a> <br />
            <br />
            <h3>News</h3>
            <a href="{base}/blog">Blog</a> <br />
            <a href="{base}/sociallinks">Social</a> <br />
            <br />
            <h3>Community</h3>
            <a href="{base}/communityresources">Community Resources</a> <br />
            <a href="https://discord.gg/NqcVDCcqd4" target="_blank">Join the Discord</a> <br />
            <br />
            <h3>Support</h3>
            <a href="{base}/contact">Contact</a> <br />
            <a href="{base}/bugreport">Report a Bug</a> <br />
            <br />
        </BurgerMenu>
    {/if}
</div>

<slot></slot>

<div id="bottombar">
    <a href="{base}/about">ABOUT US</a> |||
    <a href="{base}/sociallinks">FIND US ON SOCIAL MEDIA</a> |||
    <a href="{base}/contact">CONTACT US</a>
    <br />
    <span style="font-size: 10px; color: #DDDDDD;">(c) 2024 Lunal Graphics</span>
    
</div>

<style>
    :global(body) {
        margin: 0;
        overflow-x: hidden;
        overflow-y: scroll;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #222222;
        color: #CCCCCC;
    }

    #topbar {
        position: sticky;
        top: 0;
        width: 100vw;
        height: 50px;
        background-color: black;
        text-align: center;
        z-index: 50;
        font-family: "Orbitron", sans-serif;
        user-select: none;
    }

    #bottombar {
        width: 100vw;
        box-sizing: border-box;
        padding: 10px;
        background-color: black;
        text-align: center;
        user-select: none;
        font-family: "Orbitron", sans-serif;
        font-size: 14px;
        color: black;
    }

    :global(a) {
        color: deepskyblue;
        text-decoration: none;
        transition: color 0.16s;
        
    }

    :global(a:hover) {
        color: aliceblue;
    }

    #bottombar a {
        text-decoration: none;
        transition: color 0.2s;
        color: #DDDDDD;
    }

    #bottombar a:hover {
        color: deepskyblue;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: "Orbitron", sans-serif;
        margin: 0;
    }

    :global(.titlesection) {
        width: 100vw;
        text-align: center;
        box-sizing: border-box;
        height: 600px;
        max-height: calc(100vh - 50px);
        background-size: cover;
        background-position: center;
        color: white;
        position: relative;
        font-size: 25px;
    }

    :global(.infosection) {
        box-sizing: border-box;
        padding: 40px;
        position: relative;
        left: 50vw;
        transform: translateX(-50%);
        width: calc(min(800px, 100vw));
    }

    :global(.fullpagesection) {
        width: 100vw;
        text-align: center;
        box-sizing: border-box;
        height: calc(100vh - 50px);
        background-size: cover;
        background-position: center;
        color: white;
        position: relative;
        font-size: 25px;
    }

    :global(.centered) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    :global(button) {
        padding: 8px 18px;
        font-size: 15px;
        color: #DDDDDD!important;
        background-color: #222222;
        border: 2px solid #DDDDDD;
        font-family: 'Orbitron', sans-serif;
        border-radius: 4px;
        transition: background-color 0.36s;
        user-select: none;
        text-decoration: none!important;
    }

    :global(button:hover) {
        background-color: #444444;
        cursor: pointer;
    }

    :global(button:active) {
        background-color: #777777;
    }
</style>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QWCHRCQ92W"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-QWCHRCQ92W');
    </script>
</svelte:head>