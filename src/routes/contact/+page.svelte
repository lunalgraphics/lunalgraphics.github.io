<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/burningLogo.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Contact Us</h1>
    </div>
</div>

<div class="infosection">
    <form style="width: 100%;"
        action="https://formspree.io/f/xrgjqgqq"
        method="POST"
        target="_blank">
        <label style="width: 100%;">
            Your email: <br />
            <input type="email" name="email" placeholder="you@example.com" spellcheck="false" style="width: 100%;" />
        </label> <br /> <br />
        <label style="width: 100%;">
            Topic: <br />
            <select name="topic" style="width: 100%;">
                <option>Business</option>
                <option>Art</option>
                <option>Feature Request</option>
                <option>Misc</option>
            </select>
        </label> <br /> <br />
        <label style="width: 100%;">
            Message: <br />
            <textarea name="message" required placeholder="What's going on?" rows="7" style="width: 100%; resize: vertical;"></textarea>
        </label> <br /> <br />
        <button type="submit">Send</button>
    </form>
</div>

<svelte:head>
    <title>Contact | Lunal Graphics</title>
    <SocialMetadata
        title="Contact | Lunal Graphics"
        desc="Get in touch with Lunal Graphics"
        imgURL="https://lunalgraphics.github.io/socialPreviews/contact.png"
        pageURL="https://lunalgraphics.github.io/contact"
        imgAlt="Lunal Graphics logo"
    />
</svelte:head>

<style>

    label {
        display: inline-block;
    }

    /*input[type=text],*/ input[type=email], textarea {
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

    select:focus, input[type=email]:focus, textarea:focus {
        border-color: aliceblue;
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
</style>