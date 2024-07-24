<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/frozenLogo.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>About Us</h1>
    </div>
</div>

<div class="infosection">
    <h1>What is Lunal Graphics?</h1>
    <p>
        <!-- change this yikuan -->
        It's been somewhat established as a status quo that digital art is expensive.
        It requires money, which often must be paid in the form of subscriptions.
        We want that to change, because we realize that art is the most powerful form of human communication,
        and we realize that digital art will very soon become engrained in our culture and our identities.
        We want to allow everyone to be on the front lines of that.
        Therefore, we are creating free and high quality visual effects tools for digital artists of all kinds to realize their dreams.
    </p>
    <h1>The Team</h1>
    <p>
        Founder and CEO: Yikuan Sun
    </p>
    <h1>Thanks to our Patrons!</h1>
    <p>
        <li>Yuck Master</li>
        <br />
        Please consider
        <a href="https://www.patreon.com/yikuans/membership" target="_blank">
            supporting us on Patreon
        </a>
        and helping us carry out our mission.
    </p>
</div>

<svelte:head>
    <title>About Us | Lunal Graphics</title>
    <SocialMetadata
        title="About Us | Lunal Graphics"
        desc="Creating free creative software for digital artists."
        imgURL="https://lunalgraphics.github.io/socialPreviews/homepage.png"
        pageURL="https://lunalgraphics.github.io/about"
        imgAlt="Lunal Graphics logo"
    />
</svelte:head>