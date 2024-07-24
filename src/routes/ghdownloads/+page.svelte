<script>
    import { base } from "$app/paths";
    import spriteReplicatorBanner from "$lib/assets/images/spritereplicatorBanner.jpg";
    import zeusBanner from "$lib/assets/images/zeusBanner.jpg";
    import colorTheaterBanner from "$lib/assets/images/colortheaterBanner.jpg";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    let appData = {
        name: "Sprite Replicator",
        bannerURL: spriteReplicatorBanner,
        repo: "yikuansun/sprite-replicator",
        macURL: "", windowsURL: "", linuxURL: "",
    };

    let directory = {
        "#spritereplicator": {
            name: "Sprite Replicator",
            bannerURL: spriteReplicatorBanner,
            repo: "yikuansun/sprite-replicator"
        },
        "#zeus": {
            name: "Zeus",
            bannerURL: zeusBanner,
            repo: "yikuansun/lightning-experiment",
        },
        "#colortheater": {
            name: "Color Theater",
            bannerURL: colorTheaterBanner,
            repo: "lunalgraphics/colortheater"
        },
    };

    let archive = [];

    onMount(() => {
        if (directory[$page.url.hash]) {
            appData = directory[$page.url.hash];

            fetch(`https://api.github.com/repos/${appData["repo"]}/releases`).then(response => response.json()).then(function(releasesStream) {
                for (var asset of releasesStream[0].assets) {
                    switch (asset.name.split(".").pop()) {
                        case "AppImage":
                            appData["linuxURL"] = asset.browser_download_url;
                            break;
                        case "deb":
                            appData["linuxURL"] = asset.browser_download_url;
                            break;
                        case "zip":
                            appData["macURL"] = asset.browser_download_url;
                            break;
                        case "dmg":
                            appData["macURL"] = asset.browser_download_url;
                            break;
                        case "exe":
                            appData["windowsURL"] = asset.browser_download_url;
                            break;
                    }
                }
                archive = [];
                for (var release of releasesStream) {
                    let row = {
                        version: release.tag_name,
                        linuxURL: "",
                        macURL: "",
                        windowsURL: "",
                    };
                    for (var asset of release.assets) {
                        switch (asset.name.split(".").pop()) {
                            case "AppImage":
                                row["linuxURL"] = asset.browser_download_url;
                                break;
                            case "deb":
                                row["linuxURL"] = asset.browser_download_url;
                                break;
                            case "dmg":
                                row["macURL"] = asset.browser_download_url;
                                break;
                            case "zip":
                                row["macURL"] = asset.browser_download_url;
                                break;
                            case "exe":
                                row["windowsURL"] = asset.browser_download_url;
                                break;
                        }
                    }
                    archive = [...archive, row];
                }
            });
        }
        else {
            let a = document.createElement("a");
            a.href = base + "/";
            a.click();
        }
    });
</script>

<div class="titlesection" style="background-image: url({appData["bannerURL"]});">
    <div class="centered">
        <h1>Download {appData["name"]}</h1>
        <br />
        <a href={appData["macURL"]}>
            <button>Mac</button>
        </a>
        <a href={appData["windowsURL"]}>
            <button>Windows</button>
        </a>
        <a href={appData["linuxURL"]}>
            <button>Linux</button>
        </a>
    </div>
</div>

<div class="infosection">
    <table style="width: 100%;">
        <thead>
            <td>Version</td>
            <td>Mac</td>
            <td>Windows</td>
            <td>Linux</td>
        </thead>
        {#each archive as row}
            <tr>
                <td>{row["version"]}</td>
                <td>
                    {#if row["macURL"]}
                        <a href={row["macURL"]}>Download</a>
                    {/if}
                </td>
                <td>
                    {#if row["windowsURL"]}
                        <a href={row["windowsURL"]}>Download</a>
                    {/if}
                </td>
                <td>
                    {#if row["linuxURL"]}
                        <a href={row["linuxURL"]}>Download</a>
                    {/if}
                </td>
            </tr>
        {/each}
    </table>
</div>

<svelte:head>
    <title>Download {appData["name"]} | Lunal Graphics</title>
</svelte:head>