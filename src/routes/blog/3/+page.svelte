<script lang="ts">
	import { BlogPost } from '$lib/components';
	import banner from '$lib/assets/blog/3/banner.jpg';
	import step1 from '$lib/assets/blog/3/step1.png';
	import step2 from '$lib/assets/blog/3/step2.png';
	import step3 from '$lib/assets/blog/3/step3.png';
	import step4 from '$lib/assets/blog/3/step4.png';
	import step5 from '$lib/assets/blog/3/step5.png';
	import step6 from '$lib/assets/blog/3/step6.png';
</script>

<BlogPost
	title="Installing/Deleting .deb Packages on Linux"
	date="2024-07-17"
	description="Download your favorite desktop apps on Linux."
	{banner}
	bannerAlt="Linux terminal"
	author="Yikuan Sun"
>
	<p>
		If you're trying to download Linux apps from the web, such as Lunal Graphics products,
		.deb packages are probably the best file format to work with. They contain all of the app's
		assets, and you can extract them for usage in a few simple steps.
	</p>

	<p><a href="#install">Install</a> | <a href="#uninstall">Uninstall</a></p>

	<h2 id="install">Installing a .deb package</h2>

	<h3>1. Find the File</h3>
	<img src={step1} alt="Finding the .deb file in the file manager" />
	<p>
		Once you've downloaded the .deb file, locate it in your Files app.
		If you downloaded the file from a web browser, it probably went to the Downloads folder.
	</p>

	<h3>2. Get the File Name</h3>
	<img src={step2} alt="Copying the filename from Properties" />
	<p>
		Right click the file's thumbnail and press <strong>Properties</strong>.
		Select the filename and copy it with Ctrl + C. Make sure you've copied the entire filename,
		including the .deb file extension.
	</p>

	<h3>3. Open the Command Line</h3>
	<img src={step3} alt="Opening the terminal from the correct folder" />
	<p>
		Make sure your Files app is still opened to the folder containing the .deb file.
		Click the three dots next to the searchbar and press <strong>Open in Terminal</strong>.
	</p>

	<h3>4. Install the Debian Package</h3>
	<img src={step4} alt="Typing the install command in the terminal" />
	<p>
		In the command line, type <code>sudo apt install ./</code>,
		then use Ctrl + Shift + V to paste the name of the .deb file. Hit Enter to install
		the application. You may need to type your password and press Enter again.
	</p>

	<h3>5. Record the Real Name of the Package</h3>
	<img src={step5} alt="Copying the real package name from the terminal output" />
	<p>
		The filename of the .deb package may be different from the actual package name.
		When you use the installation command, the real package name will appear in a message
		saying <code>Note, selecting 'REAL_PACKAGE_NAME' instead of './FILENAME'</code>.
		Copy that name and write it down somewhere, in case you need to delete the package later.
	</p>
	<p>Your new app should appear in your computer's Applications menu.</p>

	<h2 id="uninstall">Uninstalling a .deb package</h2>
	<img src={step6} alt="Deleting the package using the terminal" />
	<p>
		Remember when I had you copy the real package name? You can use it to uninstall the package.
		Simply open your Terminal app, type <code>sudo apt purge REAL_PACKAGE_NAME</code>,
		and hit Enter. You may need to type in your password and hit Enter again.
		The command prompt will ask <code>Do you want to continue? [Y/n]</code> —
		type <code>y</code> and press Enter.
	</p>
</BlogPost>
