<script>
    import { base } from "$app/paths";
    import banner from "$lib/assets/blog/3/banner.jpg";
    import step1 from "$lib/assets/blog/3/step1.png";
    import step2 from "$lib/assets/blog/3/step2.png";
    import step3 from "$lib/assets/blog/3/step3.png";
    import step4 from "$lib/assets/blog/3/step4.png";
    import step5 from "$lib/assets/blog/3/step5.png";
    import step6 from "$lib/assets/blog/3/step6.png";
    import SocialMetadata from "$lib/utils/SocialMetadata.svelte";
</script>

<div class="titlesection" style="background-image: url({banner});">
    <div class="centered">
        <h1>Installing/Deleting .deb Packages on Linux</h1>
        <p>
            Download your favorite desktop apps<br />
            Blog Entry 3<br />
            2024-07-17
        </p>
    </div>
</div>

<div class="infosection">
    If you're trying to download Linux apps from the web, such as Lunal Graphics
    products, .deb packages are probably the best file format to work with. They
    contain all of the app's assets, and you can extract them for usage in a few
    simple steps.
    <br /> <br />
    <a href="#install">Install</a> |
    <a href="#uninstall">Uninstall</a>
    <br /> <br />
    <h1 id="install">Installing a .deb package</h1>
    <br />
    <h2>1. Find the File</h2>
    <br />
    <img src={step1} style:width="100%" alt="Finding the .deb file in my file manager app" />
    <br />
    Once you've downloaded the .deb file, locate it in your Files app. If you downloaded
    the file from a web browser, it probably went to the Downloads folder.
    <br /> <br /> <br />
    <h2>2. Get the File Name</h2>
    <br />
    <img src={step2} style:width="100%" alt="Copying the filename" />
    <br />
    Once you've found the file, right click its thumbnail and press <b>Properties</b>.
    This will open up some additional information including the name of the file. Select
    the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,
    including the .deb file extension.
    <br /> <br /> <br />
    <h2>3. Open the Command Line</h2>
    <br />
    <img src={step3} style:width="100%" alt="Opening the CLI from the correct folder" />
    <br />
    Make sure your Files app is still opened to the folder containing the .deb file.
    Click the three dots next to the searchbar and press <b>Open in Terminal</b>.
    This will open your computer's command line app. You will see the folder's path
    next to the prompt, meaning that the command line is opened within a specific folder.
    <br /> <br /> <br />
    <h2>4. Install the Debian Package</h2>
    <br />
    <img src={step4} style:width="100%" alt="Typing in the command prompt" />
    <br />
    In the command line, type <code >sudo apt install ./</code>,
    then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install
    the application. You may need to type your password and press Enter again.
    <br /> <br /> <br />
    <h2>5. Record the Real Name of the Package</h2>
    <br />
    <img src={step5} style:width="100%" alt="Copying the package name" />
    <br />
    The filename of the .deb package may be different from the actual package name.
    When you use the installation command, the real package name will appear in a message
    saying <code>Note, selecting 'REAL_PACKAGE_NAME' instead of './FILENAME'</code>.
    Copy that REAL_PACKAGE_NAME and make sure to write it down somewhere, in case you need
    to delete the package at any time. <br />
    <br /> Your new app should appear in your computer's Applications menu.
    <br /> <br /> <br />
    <h1 id="uninstall">Uninstalling {"(deleting)"} a .deb package</h1>
    <br />
    <img src={step6} style:width="100%" alt="Deleting the package using CLI" />
    <br />
    Remember when I had you copy the real package name of the .deb? You can use it to
    uninstall the package. Simply open your Terminal app, type <code>sudo apt purge
    REAL_PACKAGE_NAME</code>, and hit Enter. You may need to type in your password and hit
    Enter again. The command prompt will ask <code>Do you want to continue? {"[Y/n]"}</code>
    Type in <code>y</code> and press Enter.
    <br /> <br /> <br />
    <i>If you liked this article, feel free to share it on social media!</i>
    <br /> <br />
    <a href="{base}/blog">Back to the blog</a>
</div>

<svelte:head>
    <title>Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics</title>
    <SocialMetadata
        title="Installing/Deleting .deb Packages on Linux | Blog | Lunal Graphics"
        desc="Download your favorite desktop apps on Linux."
        imgURL={banner}
        pageURL="https://lunalgraphics.com"
        imgAlt="Installing a deb package on Ubuntu"
    />
</svelte:head>

<style>
    code {
        color: #EEEE56;
    }
</style>