<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import Modal from "$lib/utils/Modal.svelte";
    import fbIcon from "super-tiny-icons/images/svg/facebook.svg";
    import twitterIcon from "super-tiny-icons/images/svg/x.svg";
    import emailIcon from "super-tiny-icons/images/svg/email.svg";
    import redditIcon from "super-tiny-icons/images/svg/reddit.svg";

    let frameHeight = 0;

    function getFrameHeight() {
        frameHeight =  window.innerHeight
        - document.getElementById("topbar").getBoundingClientRect().height
        - document.getElementById("bottombar").getBoundingClientRect().height;
    }

    let appData = {
        name: "SuperBloom",
        innerURL: "https://lunalgraphics.github.io/glowrenderer/",
    };

    let directory = {
        "#superbloom": {
            name: "SuperBloom",
            innerURL: "https://lunalgraphics.com/glowrenderer/",
        },
        "#progenflares2": {
            name: "Progen Flares 2",
            innerURL: "https://progenflares2-web-preview.vercel.app/",
        },
        "#zeus": {
            name: "Zeus",
            innerURL: "https://yikuansun.github.io/lightning-experiment/",
        },
        "#spritereplicator": {
            name: "Sprite Replicator",
            innerURL: "https://yikuansun.github.io/sprite-replicator/",
        },
        "#colortheater": {
            name: "Color Theater",
            innerURL: "https://lunalgraphics.com/colortheater/",
        },
        "#404": {
            name: "404 Error",
            innerURL: "data:," + encodeURIComponent("\n\n\tThat app doesn't seem to exist... sorry!"),
        },
    };

    onMount(() => {
        getFrameHeight();
        window.addEventListener("resize", getFrameHeight);
        if (directory[$page.url.hash]) {
            appData = directory[$page.url.hash];
        }
        else {
            appData = directory["#404"];
        }
    });

    let shareModalOpen = false;
</script>

<iframe style="height: {frameHeight}px" src={appData["innerURL"]} title={appData["name"]}></iframe>

<div class="cornerBar">
    <a href={$page.url} on:click={() => { appData["innerURL"] += "?" }}>Refresh</a> |
    <a href="https://www.patreon.com/yikuans/membership" target="_blank">Donate</a> |
    <a href="javascript:null" on:click={() => { shareModalOpen = true; }}>Share</a>
</div>

<Modal bind:open={shareModalOpen} style="text-align: center;">
    <h3 style="margin-bottom: 5px;">Share our site</h3>
    <a href="https://facebook.com/sharer/sharer.php?u={encodeURIComponent("https://lunalgraphics.com")}" target="_blank">
        <img src={fbIcon} alt="Facebook" width={32} style="border-radius: 5px; margin: 0 5px;" />

    </a>
    <a href="https://twitter.com/intent/tweet/?text={encodeURIComponent("Check out these free digital art tools!")}&url={encodeURIComponent("https://lunalgraphics.com")}" target="_blank">
        <img src={twitterIcon} alt="X" width={32} style="border-radius: 5px; margin: 0 5px;" />
    </a>
    <a href="mailto:?subject={encodeURIComponent("Check out these free digital art tools!")}&body={encodeURIComponent("https://lunalgraphics.com")}" target="_blank">
        <img src={emailIcon} alt="Email" width={32} style="border-radius: 5px; margin: 0 5px;" />
    </a>
    <a href="https://reddit.com/submit/?url={encodeURIComponent("https://lunalgraphics.com")}&resubmit=true&title={encodeURIComponent("Check out these free digital art tools!")}&selftext=true&text={encodeURIComponent("https://lunalgraphics.com")}&type=LINK" target="_blank">
        <img src={redditIcon} alt="Reddit" width={32} style="border-radius: 5px; margin: 0 5px;" />
    </a>
</Modal>

<style>
    iframe {
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        border: 0;
        display: block;
    }

    .cornerBar {
        position: fixed;
        top: 50px;
        left: 0;
        padding: 10px;
        color: white;
        background-color: hsla(0deg, 0%, 0%, 0.5);
        border-radius: 0 0 10px 0;
        font-size: 10px;
        color: #222222;
    }
</style>

<svelte:head>
    <title>{appData["name"]} on the Web | Lunal Graphics</title>
</svelte:head>