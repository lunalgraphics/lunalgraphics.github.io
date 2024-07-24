<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/burningLogo.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    onMount(() => {
        let searchParams = new URLSearchParams($page.url.searchParams);
        if (searchParams.get("app")) {
            document.querySelector("select[name=topic]").value = searchParams.get("app") + " Bug Report";
        }
        if (searchParams.get("platform")) {
            document.querySelector("select[name=platform]").value = searchParams.get("platform");
        }
        if (searchParams.get("os")) {
            document.querySelector("input[name=os]").value = searchParams.get("os");
        }
        if (searchParams.get("email")) {
            document.querySelector("input[name=email]").value = searchParams.get("email");
        }
        if (searchParams.get("message")) {
            document.querySelector("textarea[name=message]").value = searchParams.get("message");
        }
    });
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Report a Bug</h1>
        <p>Help improve Lunal Graphics</p>
    </div>
</div>

<div class="infosection">
    <form style="width: 100%;"
        action="https://formspree.io/f/xrgjqgqq"
        method="POST"
        target="_blank">
        <label style="width: 100%;">
            Your email: <br />
            <input type="email" name="email" placeholder="you@example.com" spellcheck={false} style="width: 100%;" />
        </label> <br /> <br />
        <label style="width: 100%;">
            App: <br />
            <select name="topic" style="width: 100%;" required>
                <option value="Progen Flares 2 Bug Report">Progen Flares 2</option>
                <option value="SuperBloom Bug Report">SuperBloom</option>
                <option value="Zeus Bug Report">Zeus</option>
                <option value="Sprite Replicator Bug Report">Sprite Replicator</option>
                <option value="Color Theater Bug Report">Color Theater</option>
            </select>
        </label> <br /> <br />
        <label style="width: 100%;">
            Platform: <br />
            <select name="platform" style="width: 100%;" required>
                <option selected disabled hidden>Select One</option>
                <option>Web</option>
                <option>Desktop</option>
                <option>Photopea Plugin</option>
            </select>
        </label> <br /> <br />
        <label style="width: 100%;">
            Browser/Operating System: <br />
            <input type="text" name="os" placeholder="If possible, include version" spellcheck={false} style="width: 100%;" />
        </label> <br /> <br />
        <label style="width: 100%;">
            Explanation: <br />
            <textarea name="message" required placeholder="Please explain the issue thoroughly." rows="12" style="width: 100%; resize: vertical;">
                Please explain the issue thoroughly.

                Include what steps could be taken to recreate the problem.

                If you'd like to include screenshots, upload them to imgur.com and paste the links here.
            </textarea>
        </label> <br /> <br />
        <button type="submit">Send</button>
    </form>
</div>

<svelte:head>
    <title>Report a Bug | Lunal Graphics</title>
    <SocialMetadata
        title="Report a Bug | Lunal Graphics"
        desc="Help improve Lunal Graphics"
        imgURL="https://lunalgraphics.github.io/socialPreviews/contact.png"
        pageURL="https://lunalgraphics.github.io/bugreport"
        imgAlt="Lunal Graphics logo"
    />
</svelte:head>

<style>

    label {
        display: inline-block;
    }

    input[type=text], input[type=email], textarea {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-sizing: border-box;
        padding: 10px;
        transition: border-color 0.2s;
    }

    select, option {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 10px;
        box-sizing: border-box;
        transition: border-color 0.2s;
    }

    input[type=text]:focus, input[type=email]:focus, textarea:focus, select:focus {
        border-color: aliceblue;
    }
</style>