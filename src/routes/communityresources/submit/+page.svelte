<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/images/shockwave.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let step = 0;
    let agreeToGuidelines = false;

    let submissionDetails = {
        userId: "",
        email: "",
        author: "",
        name: "",
        description: "",
        b64: "",
        thumbnail64: "",
        type: "ctpreset",
    };

    onMount(() => {
        submissionDetails["userId"] = localStorage.getItem("userId");
        if (!submissionDetails["userId"]) {
            submissionDetails["userId"] = "user" + Math.random().toFixed(5).replace(".", "");
            localStorage.setItem("userId", submissionDetails["userId"]);
        }

        submissionDetails["author"] = localStorage.getItem("displayName") || "";
        submissionDetails["email"] = localStorage.getItem("email") || "";
    });

    function saveUserCredentials() {
        localStorage.setItem("displayName", submissionDetails["author"]);
        localStorage.setItem("email", submissionDetails["email"]);
    }

    async function handleFileUpload(e) {
        let file = e.target.files[0];
        let fR = new FileReader();
        let readFile = new Promise((res, rej) => {
            fR.addEventListener("loadend", (e2) => {
                res(e2.target.result);
            });
            fR.readAsDataURL(file);
        });
        return await readFile;
    }

    let thumbnailCanvas;

    function getFileExt(type) {
        let out = "";
        switch (type) {
            case "ctpreset":
                out = ".ctxml";
                break;
            case "srtexture":
                out = ".png";
                break;
            case "pgf2preset":
                out = ".pgf2";
                break;
        }
        return out;
    }

    let assetFilename = "no file selected";

    function submitForm() {
        fetch("https://lunalgraphics-communityresources.vercel.app/api/v1/resources", {
            method: "POST",
            body: JSON.stringify(submissionDetails),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (fResponse) => {
            let jason = await fResponse.json();
            resourceId = jason["data"];
            let notificationData = new URLSearchParams();
            notificationData.set("email", submissionDetails["email"]);
            notificationData.set("topic", "New submission to Community Resources");
            notificationData.set("message", `
                Author: ${submissionDetails["author"]} (ID: ${submissionDetails["userId"]})

                Resource ID: ${resourceId}

                View the PR at https://github.com/lunalgraphics/community-resources/pulls?q=${resourceId}
            `);
            fetch("https://formspree.io/f/xrgjqgqq", {
                method: "POST",
                body: notificationData,
            });
        });
    }

    let resourceId = "0000";
</script>

{#if step == 0}
    <div class="infosection" transition:fade>
        <h1>Before we start...</h1>
        <p>
            Please read the following guidelines for submissions to
            Lunal Graphics Community Resources.
        </p>
        <textarea style="width: 100%;" readonly rows={20}>
- SUBMISSION GUIDELINES -

1. ORIGINAL WORK
Submitted resources must be your original work. You may use assets created by other people {"(stock images, etc.)"} as long as you have permission to do so.

2. SUBMISSION QUALITY
Submitted resources must be made for the singular purpose of improving people's artwork. Think: would I use this in my own work? Thus, no obscene content is allowed.

3. SPAM
Do not spam the form, or your submissions will be blocked.

Failure to adhere to any of the above guidelines will prevent your submission from being approved.
        </textarea>
        <br /> <br />
        <label>
            <input type="checkbox" bind:checked={agreeToGuidelines} />
            I have read the statements above and agree to follow them.
        </label>
        <br /> <br />
        <button disabled={!agreeToGuidelines} on:click={() => {
            if (agreeToGuidelines) step = 1;
        }}>Continue</button>
    </div>
{:else if step == 1}
    <div class="infosection" transition:fade>
        <button on:click={() => { step--; }}>Back</button>
        <br /> <br />
        <h1>Tell Us More About You</h1>
        <p>
            This helps you earn recognition and lets us contact you if necessary.
            Your email will not be publicly displayed anywhere.
        </p>
        <label>
            <h2>Your Email {"(optional)"}</h2>
            <input type="email" placeholder="cool_artist@example.com" bind:value={submissionDetails["email"]} />
            <br />
        </label>
        <br />
        <label>
            <h2>Display Name</h2>
            <input type="text" placeholder="How would you like to be credited? Leave blank to remain anonymous." bind:value={submissionDetails["author"]} />
            <br />
        </label>
        <br />
        <button on:click={() => {
            step = 2;
            saveUserCredentials();
        }}>Continue</button>
    </div>
{:else if step == 2}
    <div class="infosection" transition:fade>
        <button on:click={() => { step--; }}>Back</button>
        <br /> <br />
        <h1>What's it About?</h1>
        <p>Tell us about the resource you're uploading!</p>
        <label>
            <h2>Title</h2>
            <input type="text" placeholder="What should we call your resource?" bind:value={submissionDetails["name"]} />
            <br />
        </label>
        <br />
        <label>
            <h2>Type</h2>
            <select bind:value={submissionDetails["type"]}>
                <option value="ctpreset">Color Theater Preset</option>
                <option value="srtexture">Sprite Replicator Texture</option>
                <option value="pgf2preset">Progen Flares 2 Preset</option>
            </select>
            <br />
        </label>
        <br />
        <label>
            <h2>Description</h2>
            <input type="text" placeholder="Provide a short statement about how the resource should be used." bind:value={submissionDetails["description"]} />
            <br />
        </label>

        <br />
        <button disabled={!(submissionDetails["name"] && submissionDetails["description"])} on:click={(e) => {
            if (!e.target.disabled) {
                step = 3;
            }
        }}>Continue</button>
    </div>
{:else if step == 3}
    <div class="infosection" transition:fade>
        <button on:click={() => { step--; }}>Back</button>
        <br /> <br />
        <h1>Upload Your Files</h1>
        <br />
        <button>
            <label>
                Upload the asset
                <input type="file" style:display="none" accept={getFileExt(submissionDetails["type"])} on:change={(e) => {
                    if (e.target.files.length < 1) return;
                    handleFileUpload(e).then((dataURL) => {
                        assetFilename = e.target.files[0].name;
                        submissionDetails["b64"] = dataURL.split(";base64,")[1];
                    });
                }} />
            </label>
        </button>
        <br />
        <code>{assetFilename}</code> <br />
        <br />
        <button>
            <label>
                Upload a thumbnail image
                <input type="file" style:display="none" accept="image/*" on:change={(e) => {
                    if (e.target.files.length < 1) return;
                    handleFileUpload(e).then((dataURL) => {
                        let img = new Image();
                        img.src = dataURL;
                        img.addEventListener("load", () => {
                            let aspectRatio = img.width / img.height;
                            let ctx = thumbnailCanvas.getContext("2d");
                            ctx.drawImage(img, 0, 0, 480, 480 / aspectRatio);
                            let finalDataURL = thumbnailCanvas.toDataURL("image/png");
                            submissionDetails["thumbnail64"] = finalDataURL.split(";base64,")[1];
                        });
                    });
                }} />
            </label>
        </button>
        <br />
        <canvas bind:this={thumbnailCanvas} width={480} height={270}></canvas>
        <br /> <br />

        <button disabled={!(submissionDetails["b64"] && submissionDetails["thumbnail64"])} on:click={(e) => {
            if (!e.target.disabled) {
                submitForm();
                step = 4;
            }
        }}>Submit</button>
    </div>
{:else if step == 4}
    <div class="infosection" transition:fade>
        <h1>Congratulations!</h1>
        <p>
            Your resource has been submitted.
            <br /> <br />
            It may take a few days for your submission to be approved. <br />
            Feel free to <a href="{base}/contact">contact us</a> with any questions.
        </p>
    </div>
{/if}

<svelte:head>
    <title>Submit a Resource | Lunal Graphics</title>
    <SocialMetadata
        title="Community Resources | Lunal Graphics"
        desc="Explore free assets from the Lunal Graphics community!"
        imgURL={banner}
        pageURL="https://lunalgraphics.com"
        imgAlt="Shockwave"
    /> <!-- need to replace with full URLs -->
</svelte:head>

<style>
    textarea {
        width: 100%;
        resize: vertical;
        outline: none!important;
        background-color: #222222;
        color: whitesmoke;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #414141;
        border-radius: 3px;
    }

    input[type=text], input[type=email] {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
    }

    button:disabled {
        border-color: grey;
        color: grey!important;
        background-color: #222222;
        cursor: not-allowed;
    }

    button {
        transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    button label {
        display: inline-block;
        padding: 8px 18px;
    }

    button:has(label) {
        display: inline-block;
        padding: 0!important;
    }

    select, option {
        background-color: #181818;
        border-radius: 3px;
        border: 1px solid dimgrey;
        outline: none!important;
        color: aliceblue;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
    }
</style>