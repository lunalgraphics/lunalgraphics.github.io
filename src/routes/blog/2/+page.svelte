<script lang="ts">
	import { BlogPost } from '$lib/components';
	import banner from '$lib/assets/blog/2/banner.png';
	import step1 from '$lib/assets/blog/2/step1.png';
	import step2 from '$lib/assets/blog/2/step2.png';
	import step3 from '$lib/assets/blog/2/step3.png';
	import step4 from '$lib/assets/blog/2/step4.png';
</script>

<BlogPost
	title="Installing Plugins in Photopea"
	date="2024-06-27"
	description="Learn how to expand your editing toolkit by installing free plugins in Photopea."
	{banner}
	bannerAlt="Photopea plugin installation"
	author="Yikuan Sun"
>
	<p>
		Plugins are a great way to expand the capabilities of your editor.
		Photopea has more than 40 plugins that you can use to do everything
		from adding emojis to generating energy effects. The following is a
		step-by-step guide to installing and using plugins in Photopea.
	</p>

	<h2>Step 1: Open Plugins Menu</h2>
	<img src={step1} alt="Open from Window → Plugins" />
	<p>
		First off, open the Plugins menu from <strong>Window → Plugins.</strong>
		You will see a catalog of plugins developed by different people.
	</p>

	<h2>Step 2: Select Plugins</h2>
	<img src={step2} alt="Find plugins in the menu" />
	<p>
		There are several ways to search for the perfect plugin.
		You can scroll through the catalog, or find a category from the left panel.
		<strong>Resources</strong> refers to plugins that help you import assets.
		<strong>Effects</strong> refers to plugins that generate effects based on your document.
		<strong>Generate Content</strong> plugins create new things from scratch, like charts and QR codes.
	</p>
	<p>
		You can find Lunal Graphics plugins by typing "Lunal Graphics" into the searchbar at the top.
	</p>

	<h2>Step 3: Install</h2>
	<img src={step3} alt="Click Install on the plugin page" />
	<p>
		Once you've found a plugin you like, just click on its thumbnail and press <strong>Install</strong>.
	</p>

	<h2>Step 4: Use the Plugin</h2>
	<img src={step4} alt="Open the plugin using the icon on the side panel" />
	<p>
		Close the Plugins menu using the <strong>X</strong> at the top-right corner.
		To open any plugin, click on its icon on the side panel (near the Layers panel).
		To resize the plugin window, use the handle at its bottom-left. :)
	</p>
</BlogPost>
