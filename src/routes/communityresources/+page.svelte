<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/shockwave.jpg";
    import ImageSlider from "svelte-imageslider";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";

    let resources = [];

    async function getResources() {
        let fResponse = await fetch("https://lunalgraphics-communityresources.vercel.app/api/v1/resources");
        let jason = await fResponse.json();
        resources = jason["data"];
        getResourcesFiltered();
    }

    onMount(() => {
        getResources();
    });

    async function downloadURL(url, name="asset") {
        let ext = url.split(".").pop();
        let fResponse = await fetch(url);
        let fish = await fResponse.blob();
        let a = document.createElement("a");
        a.href = URL.createObjectURL(fish);
        a.download = name + "." + ext;
        a.click();
    }

    let filters = {
        searchQuery: "",
        type: "ctpreset",
    };
    let resourcesFiltered = [];

    function getResourcesFiltered() {
        resourcesFiltered = [];
        for (let r of resources) {
            if ((r["info"]["name"].toLowerCase().includes(filters["searchQuery"].toLowerCase())
                || r["info"]["author"].toLowerCase().includes(filters["searchQuery"].toLowerCase())
                || r["info"]["description"].toLowerCase().includes(filters["searchQuery"].toLowerCase()))
                && (r["info"]["type"] == filters["type"])) {
                resourcesFiltered = [...resourcesFiltered, r];
            }
        }
    };
</script>

<div class="infosection">
    <h1>Community Resources</h1>
    <h3>Explore assets made by you, for you.</h3>
    <a href="{base}/communityresources/submit">Submit a resource</a>
    <br />
    <div id="filterMenu">
        <label>
            I'm looking for
            <select bind:value={filters["type"]} on:change={getResourcesFiltered} style:margin-bottom="8px">
                <option value="ctpreset">Color Theater presets</option>
                <option value="srtexture">Sprite Replicator textures</option>
                <option value="pgf2preset">Progen Flares 2 presets</option>
            </select>
        </label>
        <br />
        <input type="text" bind:value={filters["searchQuery"]} placeholder="Seach by name, author, or description" on:input={getResourcesFiltered} />
    </div>
    <br />
    {#if resources.length == 0}
        Loading...
    {:else if resourcesFiltered.length == 0}
        No resources found. Try changing your search.
        <br />
        You can also contribute by
        <a href="{base}/communityresources/submit">uploading your own resource</a>
    {/if}
    <div id="cardBox">
        {#each resourcesFiltered as r}
            <div class="card" style:background-image="url('{r["thumbnailURL"]}')"
                on:click={() => { downloadURL(r["assetURL"], r["info"]["name"]); }}>
                <div style="position: absolute;
                    bottom: 0; left: 0; width: 100%;
                    background-color: #22222293;
                    box-sizing: border-box;
                    font-size: small;
                    padding: 8px;">
                    <h3>{r["info"]["name"]}</h3>
                    {r["info"]["description"]} <br />
                    <small>Created by {r["info"]["author"]}</small>
                </div>
                <!--<div style="position: absolute;
                    top: 0; right: 0;
                    background-color: #22222293;
                    box-sizing: border-box;
                    font-size: x-small;
                    padding: 5px;">
                    For
                    {#if r["info"]["type"] == "ctpreset"}Color Theater{/if}
                    {#if r["info"]["type"] == "srtexture"}Sprite Replicator{/if}
                    {#if r["info"]["type"] == "pgf2preset"}Progen Flares 2{/if}
                </div>-->
            </div>
        {/each}
    </div>
</div>

<svelte:head>
    <title>Community Resources | Lunal Graphics</title>
    <SocialMetadata
        title="Community Resources | Lunal Graphics"
        desc="Explore free assets from the Lunal Graphics community!"
        imgURL={banner}
        pageURL="https://lunalgraphics.com/communityresources"
        imgAlt="Shockwave"
    /> <!-- need to replace with full URLs -->
</svelte:head>

<style>
    .card {
        aspect-ratio: 16 / 9;
        border: 1px solid grey;
        margin-bottom: 8px;
        break-inside: avoid-column;
        position: relative;
        background-position: center;
        background-size: 100% 100%;
        transition: background-size 0.2s;
        color: white;
        display: block;
        text-decoration: none;
    }

    .card:hover {
        background-size: 120% 120%;
        cursor: pointer;
    }

    #cardBox {
        column-count: 2;
        column-gap: 8px;
    }

    @media screen and (max-width: 400px) {
        #cardBox {
            column-count: 1;
        }
    }

    #filterMenu {
        position: sticky;
        top: 50px;
        z-index: 8;
        padding: 8px;
        box-sizing: border-box;
        background-color: #222222;
    }

    #filterMenu input[type=text] {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 100%;
        box-sizing: border-box;
        padding: 8px;
        margin-bottom: 8px;
    }

    select, option {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 4px;
    }
</style>