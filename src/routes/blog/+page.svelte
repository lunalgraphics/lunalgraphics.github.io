<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/shockwave.jpg";
    import entry2banner from "$lib/assets/blog/2/banner.png";
    import entry3banner from "$lib/assets/blog/3/banner.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    
    let entries = [
        {
            "id": 3,
            "imgURL": entry3banner,
            "date": "2024-07-17",
            "preview": "Download your favorite desktop apps in Linux",
            "title": "Installing/Deleting .deb Packages on Linux",
        },
        {
            "id": 2,
            "imgURL": entry2banner,
            "date": "2024-06-27",
            "preview": "Plugins are a great way to expand the capabilities of your editor",
            "title": "Installing Plugins in Photopea",
        },
        {
            "id": 1,
            "imgURL": banner,
            "date": "2024-07-25",
            "preview": "Announcing the new website!",
            "title": "New Site, New Blog",
        },
    ];
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Blog</h1>
    </div>
</div>

<div class="infosection">
    {#each entries as ent}
        <br />
        <div class="entryPreviewImg" style="background-image: url({ent["imgURL"]});"></div>
        <h1>{ent["title"]}</h1>
        <b>Date: {ent["date"]}</b>
        <p>{ent["preview"]}...</p>
        <a href="{base}/blog/{ent["id"]}">Read More</a>
        <br /> <br />
        <hr />
    {/each}
</div>

<svelte:head>
    <title>Blog | Lunal Graphics</title>
    <SocialMetadata
        title="Blog | Lunal Graphics"
        desc="News & more from Lunal Graphics"
        imgURL="https://lunalgraphics.github.io/socialPreviews/blog.png"
        pageURL="https://lunalgraphics.github.io/blog"
        imgAlt="Shockwave"
    />
</svelte:head>

<style>
    hr {
        border: 1px solid dimgrey;
        border-radius: 2px;
    }

    .entryPreviewImg {
        aspect-ratio: 2.35 / 1;
        margin-bottom: 10px;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
</style>