<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/matrixText.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";

    let videos = [
        {
            "title": "Getting Started with Sprite Replicator",
            "desc": "Yikuan explains the basics of Sprite Replicator.",
            "difficulty": "Beginner",
            "ytID": "8fNo15zvu5w",
            "appsUsed": ["spritereplicator"],
        },
        {
            "title": "Getting Started with Zeus",
            "desc": "Yikuan explains how to use Zeus.",
            "difficulty": "Beginner",
            "ytID": "fzBXbp5ji-Y",
            "appsUsed": ["zeus"],
        },
        {
            "title": "Getting Started with SuperBloom",
            "desc": "Yikuan explains how to use SuperBloom.",
            "difficulty": "Beginner",
            "ytID": "XO5J1kqNiYM",
            "appsUsed": ["superbloom"],
        },
        {
            "title": "Getting Started with Progen Flares 2",
            "desc": "Yikuan explains how to use Progen Flares 2.",
            "difficulty": "Beginner",
            "ytID": "EOsO6-void8",
            "appsUsed": ["progenflares2"],
        },
        {
            "title": "Separate glows in SuperBloom",
            "desc": "Learn how to use separate SuperBloom settings for different parts of an image.",
            "difficulty": "Beginner",
            "ytID": "6ZKOJKxZdPc",
            "appsUsed": ["superbloom"],
        },
        {
            "title": "Use SuperBloom in a Mysterious Hallway Composite",
            "desc": "Learn how to create a dramatic hallway scene and finish with SuperBloom.",
            "difficulty": "Advanced",
            "ytID": "R6GkQW0aZ-0",
            "appsUsed": ["superbloom"],
        },
        {
            "title": "Make a 3D Texture and Enhance it with SuperBloom + Color Theater",
            "desc": "Learn how to create a pseudo-3D tile pattern and make it glow.",
            "difficulty": "Intermediate",
            "ytID": "DK6W6DxeXNs",
            "appsUsed": ["superbloom", "colortheater"],
        },
    ];

    let filterData = {
        apps: {
            "superbloom": true,
            "spritereplicator": true,
            "zeus": true,
            "colortheater": true,
            "progenflares2": true,
        },
        difficulty: "Any",
        search: "",
    };

    let videosFiltered = [];

    function overlap(arr, obj) {
        for (let x of arr) {
            if (obj[x]) return true;
        }
        return false;
    }

    function getVideosFiltered() {
        videosFiltered = [];
        for (let vid of videos) {
            if ((vid["title"].toLowerCase().includes(filterData["search"].toLowerCase())
                || vid["desc"].toLowerCase().includes(filterData["search"].toLowerCase()))
                && (vid["difficulty"] == filterData["difficulty"]
                || filterData["difficulty"] == "Any")
                && overlap(vid["appsUsed"], filterData["apps"])
            ) {
                videosFiltered = [...videosFiltered, vid];
            }
            console.log("string check", (vid["title"].toLowerCase().includes(filterData["search"].toLowerCase())
            || vid["desc"].toLowerCase().includes(filterData["search"].toLowerCase())));
            console.log("diff check", (vid["difficulty"] == filterData["difficulty"]
            || vid["difficulty"] == "Any"));
            console.log("overlap check", overlap(vid["appsUsed"], filterData["apps"]));
        }
    }

    onMount(() => {
        getVideosFiltered();
    });
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Video Tutorials</h1>
        <p>Learn to use the Lunal Graphics apps</p>
    </div>
</div>

<div class="infosection">
    <div style="position: sticky; top: 50px; background-color: #222222;">
        <input type="text" style="box-sizing: border-box; width: 100%; padding: 12px; margin-bottom: 8px;" bind:value={filterData["search"]} on:input={getVideosFiltered} placeholder="Find a tutorial" />
        <br />
        Uses:
        <label>
            <input type="checkbox" bind:checked={filterData["apps"]["superbloom"]} on:change={getVideosFiltered} />
            SuperBloom
        </label>
        <label>
            <input type="checkbox" bind:checked={filterData["apps"]["spritereplicator"]} on:change={getVideosFiltered} />
            Sprite Replicator
        </label>
        <label>
            <input type="checkbox" bind:checked={filterData["apps"]["zeus"]} on:change={getVideosFiltered} />
            Zeus
        </label>
        <label>
            <input type="checkbox" bind:checked={filterData["apps"]["progenflares2"]} on:change={getVideosFiltered} />
            Progen Flares 2
        </label>
        <label>
            <input type="checkbox" bind:checked={filterData["apps"]["colortheater"]} on:change={getVideosFiltered} />
            Color Theater
        </label>
        <br />
        <label>
            Difficulty:
            <select bind:value={filterData["difficulty"]} on:change={getVideosFiltered}>
                <option default>Any</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </label>
        <br /> <br />
    </div>
    <hr />
    {#each videosFiltered as data}
        <br />
        <h1>{data["title"]}</h1>
        <b>Difficulty: {data["difficulty"]}</b>
        <p>{data["desc"]}</p>
        <iframe src="https://www.youtube.com/embed/{data["ytID"]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <br /> <br />
        <hr />
    {/each}
</div>

<svelte:head>
    <title>Video Tutorials | Lunal Graphics</title>
    <SocialMetadata
        title="Video Tutorials | Lunal Graphics"
        desc="Learn how to make epic art with Lunal Graphics apps!"
        imgURL="https://lunalgraphics.github.io/socialPreviews/videotutorials.png"
        pageURL="https://lunalgraphics.github.io/videotutorials"
        imgAlt="Image created with Sprite Replicator"
    /> <!-- need to replace with full URLs -->
</svelte:head>

<style>
    hr {
        border: 1px solid dimgrey;
        border-radius: 2px;
    }

    iframe {
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    label {
        display: inline-block;
    }

    input[type=checkbox] {
        accent-color: deepskyblue;
    }

    input[type=text] {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    input[type=text]:focus {
        border-color: aliceblue;
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