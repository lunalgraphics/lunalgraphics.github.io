<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/industrialLogo.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="fullpagesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Connect With Us</h1>
        <p>
            <a href="https://instagram.com/lunalgraphics" target="_blank">
                <button>Instagram</button>
            </a> <br /> <br />
            <a href="https://discord.gg/NqcVDCcqd4" target="_blank">
                <button>Discord</button>
            </a> <br /> <br />
            <a href="https://www.patreon.com/yikuans" target="_blank">
                <button>Patreon</button>
            </a> <br /> <br />
        </p>
    </div>
</div>

<svelte:head>
    <title>Social | Lunal Graphics</title>
    <SocialMetadata
        title="Social | Lunal Graphics"
        desc="Follow Lunal Graphics on social media!"
        imgURL="https://lunalgraphics.github.io/homepage.png"
        pageURL="https://lunalgraphics.github.io/social"
    /> <!-- need to replace with full URLs -->
</svelte:head>