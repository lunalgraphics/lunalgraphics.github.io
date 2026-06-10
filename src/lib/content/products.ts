export interface ProductExample {
	before: string;
	after: string;
	beforeCaption: string;
	afterCaption: string;
}

export interface ProductSection {
	title: string;
	description: string;
	example?: ProductExample;
	image?: string;
	imageAlt?: string;
}

export interface Product {
	name: string;
	slug: string;
	tagline: string;
	description: string;
	banner: string;
	webLauncherHash: string;
	downloadUrl: string;
	downloadExternal: boolean;
	hasPhotoshopPage: boolean;
	sections: ProductSection[];
}

export const products: Product[] = [
	{
		name: 'Zeus',
		slug: 'about-zeus',
		tagline: 'Electrical Energy Effects',
		description: 'Zeus lets artists create intense electrical energy effects.',
		banner: '/images/zeusBanner.jpg',
		webLauncherHash: 'zeus',
		downloadUrl: '/ghdownloads/zeus',
		downloadExternal: false,
		hasPhotoshopPage: false,
		sections: [
			{
				title: 'What is Zeus?',
				description: 'Zeus can be used to create electric energy effects. That can mean lightning, laser beams, or even lightsabers. Assets created with Zeus can instantly be dropped onto a composite, ready for immediate use.',
				example: {
					before: 'zeus1before.jpg',
					after: 'zeus1after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Powerful Glow',
				description: "Zeus uses the same glow algorithm as SuperBloom, creating realistic light falloff. However, Zeus has an additional feature: Glow Distortion, which can be used to create atmospheric haze or make an electric strand seem even more energetic and unstable.",
				example: {
					before: 'zeus2before.jpg',
					after: 'zeus2after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Realistic Lens Blur',
				description: "In the version 4.0.0 update, Zeus's softening algorithm was switched to a photorealistic lens blur, mimicking the blur caused by objects being out of focus in an image taken with a shallow depth of field.",
				example: {
					before: 'zeus3before.jpg',
					after: 'zeus3after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Use Zeus Directly in Photopea',
				description: 'Zeus is available as a Photopea plugin. Learn how to install it <a href="/blog/2">here</a>.'
			}
		]
	},
	{
		name: 'Sprite Replicator',
		slug: 'about-spritereplicator',
		tagline: 'Advanced Particle Workflow',
		description: 'Sprite Replicator lets artists create complex patterns or particle effects.',
		banner: '/images/spritereplicatorBanner.jpg',
		webLauncherHash: 'spritereplicator',
		downloadUrl: '/ghdownloads/spritereplicator',
		downloadExternal: false,
		hasPhotoshopPage: false,
		sections: [
			{
				title: 'What is Sprite Replicator?',
				description: 'At its simplest, Sprite Replicator can be used to scatter several copies of an image in 3D space. At its best, Sprite Replicator can be used to create complex patterns and visual effects. By giving the artist full control over the duplication of an image, Sprite Replicator allows for limitless creative possibilities.',
				example: {
					before: 'spritereplicator1before.jpg',
					after: 'spritereplicator1after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Unique Visual Effects',
				description: 'Sprite Replicator can be used to create intricate visual effects such as smoke and magic energy. The Gravity controls add direction to effects such as particle trails and fire.',
				example: {
					before: 'spritereplicator2before.jpg',
					after: 'spritereplicator2after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Blending Control',
				description: 'Sprite Replicator respects the colors and blend modes of your textures. This allows for much more detail and control than what could be achieved using a brush.',
				example: {
					before: 'spritereplicator3before.jpg',
					after: 'spritereplicator3after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Edit in True 3D Space',
				description: 'The latest version of Sprite Replicator allows you to replicate your 2D textures in real 3D space. This allows for in-camera effects such as lens blur.',
				example: {
					before: 'spritereplicator4before.jpg',
					after: 'spritereplicator4after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Use Sprite Replicator Directly in Photopea',
				description: 'Sprite Replicator is available as a Photopea plugin. Learn how to install it <a href="/blog/2">here</a>.'
			}
		]
	},
	{
		name: 'Color Theater',
		slug: 'about-colortheater',
		tagline: 'Quick & Effective Color Grading',
		description: 'Color Theater lets artists create beautiful color grades quickly.',
		banner: '/images/colortheaterBanner.jpg',
		webLauncherHash: 'colortheater',
		downloadUrl: '/ghdownloads/colortheater',
		downloadExternal: false,
		hasPhotoshopPage: false,
		sections: [
			{
				title: 'What is Color Theater?',
				description: 'Color Theater lets artists create beautiful color grades quickly. They can also save their color grades as presets which can be reused and shared with the community.',
				example: {
					before: 'colortheater1before.jpg',
					after: 'colortheater1after.jpg',
					beforeCaption: 'Before (created with Sprite Replicator)',
					afterCaption: 'After'
				}
			},
			{
				title: 'Dramatic Split-Toning',
				description: "Color Theater's key feature, split-toning, allows you to add different tints to the highlights and shadows of your image. You get full control over the intensity and balance of the effect.",
				example: {
					before: 'colortheater2before.jpg',
					after: 'colortheater2after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Powerful Vignettes',
				description: 'Color Theater allows you to create a vignette effect in just a few clicks. You get full control over the size, intensity, color, and blend mode of the vignette.',
				example: {
					before: 'colortheater3before.jpg',
					after: 'colortheater3after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Legacy Presets',
				description: 'Color Theater 2.0.0 no longer contains built-in presets, as it is transitioning to a new preset format (ctxml files instead of cmtx files). If you\'d like to use the old built-in presets from version 1, you can download them from <a href="/communityresources">Community Resources</a> (they are labeled as Legacy Presets).'
			},
			{
				title: 'Use Color Theater Directly in Photopea',
				description: 'Color Theater is available as a Photopea plugin. Learn how to install it <a href="/blog/2">here</a>.'
			}
		]
	},
	{
		name: 'SuperBloom',
		slug: 'about-superbloom',
		tagline: 'Photorealistic Bloom & Glow',
		description: 'SuperBloom lets artists create beautiful bloom and glow effects easily.',
		banner: '/images/superbloomBanner.jpg',
		webLauncherHash: 'superbloom',
		downloadUrl: '/ghdownloads/superbloom',
		downloadExternal: false,
		hasPhotoshopPage: true,
		sections: [
			{
				title: 'What is SuperBloom?',
				description: 'SuperBloom lets artists create beautiful bloom and glow effects easily. Whether it be for adding photorealism to a light-based image, or for adding a dreamy haze to fantasy artwork, SuperBloom is the top choice of artists for a variety of situations.',
				example: {
					before: 'superbloom1before.jpg',
					after: 'superbloom1after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Advanced Colorization',
				description: 'SuperBloom lets you pick the color of your glow instantly. The colorization algorithm creates photorealistic color-shifting, mimicking real light falloff. For example, an orange glow would look more yellow towards the center of the light source, and more red towards the edges.',
				example: {
					before: 'superbloom2before.jpg',
					after: 'superbloom2after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Great for Visual Effects',
				description: 'Magic or sci-fi VFX looking too plain? SuperBloom makes effects seem brighter and more powerful. Whether it be spells, energy balls, laser beams or lightsabers, SuperBloom is the way to go.',
				example: {
					before: 'superbloom3before.jpg',
					after: 'superbloom3after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Enhance Your 3D Renders',
				description: 'Render looking too flat or unrealistic? SuperBloom adds dimension and atmosphere to 3D renders.',
				example: {
					before: 'superbloom4before.jpg',
					after: 'superbloom4after.jpg',
					beforeCaption: 'Before (Image from Unsplash)',
					afterCaption: 'After'
				}
			},
			{
				title: 'Use SuperBloom Directly in Photopea',
				description: 'SuperBloom is available as a Photopea plugin. Learn how to install it <a href="/blog/2">here</a>.'
			},
			{
				title: 'SuperBloom for Photoshop',
				description: 'SuperBloom is now available as a Photoshop plugin!',
				image: '/images/superbloom-photoshop-demo.png',
				imageAlt: 'SuperBloom for Photoshop'
			}
		]
	},
	{
		name: 'Progen Flares 2',
		slug: 'about-progenflares2',
		tagline: 'Beautiful Lens Flares',
		description: 'Progen Flares 2 lets artists create beautiful custom lens flares.',
		banner: '/images/progenflares2Banner.jpg',
		webLauncherHash: 'progenflares2',
		downloadUrl: '/ghdownloads/progenflares2',
		downloadExternal: false,
		hasPhotoshopPage: true,
		sections: [
			{
				title: 'What is Progen Flares 2?',
				description: 'Progen Flares 2 is <em>the only</em> free, cross-platform lens flare studio which gives artists complete control over their flares. Not in the mood for flare-building? Progen Flares 2 also includes dozens of beautiful built-in presets. Pick one and enjoy.',
				example: {
					before: 'progenflares21before.jpg',
					after: 'progenflares21after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Cinematic Looks',
				description: 'Lens flare is often used in films and television. Thus, Progen Flares 2 is the perfect tool for making your artwork look more cinematic. Just make sure not to go overboard: then you\'ll end up looking like J. J. Abrams!',
				example: {
					before: 'progenflares22before.jpg',
					after: 'progenflares22after.jpg',
					beforeCaption: 'Before',
					afterCaption: 'After'
				}
			},
			{
				title: 'Edit on Top of Your Image',
				description: 'Progen Flares 2 has an innovative Reference Image feature. Import your base artwork, and see how your lens flare would look on top of that image: all without ever leaving the app.',
				image: '/examples/progenflares23.jpg',
				imageAlt: 'The innovative Reference Image feature of Progen Flares 2'
			},
			{
				title: 'Use Progen Flares 2 Directly in Photopea',
				description: 'Progen Flares 2 is available as a Photopea plugin. Learn how to install it <a href="/blog/2">here</a>.'
			},
			{
				title: 'Progen Flares 2 for Photoshop',
				description: 'Progen Flares 2 is now available as a Photoshop plugin!',
				image: '/images/progenflares2-photoshop-demo.jpg',
				imageAlt: 'Progen Flares 2 as a Photoshop plugin'
			}
		]
	}
];

export function getProductBySlug(slug: string): Product | undefined {
	return products.find((p) => p.slug === slug);
}
