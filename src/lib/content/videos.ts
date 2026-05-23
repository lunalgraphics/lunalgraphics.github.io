export interface VideoTutorial {
	title: string;
	description: string;
	difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
	youtubeId: string;
	appsUsed: string[];
}

export const videos: VideoTutorial[] = [
	{
		title: 'Getting Started with Sprite Replicator',
		description: 'Yikuan explains the basics of Sprite Replicator.',
		difficulty: 'Beginner',
		youtubeId: '8fNo15zvu5w',
		appsUsed: ['spritereplicator']
	},
	{
		title: 'Getting Started with Zeus',
		description: 'Yikuan explains how to use Zeus.',
		difficulty: 'Beginner',
		youtubeId: 'fzBXbp5ji-Y',
		appsUsed: ['zeus']
	},
	{
		title: 'Getting Started with SuperBloom',
		description: 'Yikuan explains how to use SuperBloom.',
		difficulty: 'Beginner',
		youtubeId: 'XO5J1kqNiYM',
		appsUsed: ['superbloom']
	},
	{
		title: 'Getting Started with Progen Flares 2',
		description: 'Yikuan explains how to use Progen Flares 2.',
		difficulty: 'Beginner',
		youtubeId: 'EOsO6-void8',
		appsUsed: ['progenflares2']
	},
	{
		title: 'Getting Started with SuperBloom for Photoshop',
		description: 'Harness the full power of SuperBloom, all within Adobe Photoshop.',
		difficulty: 'Beginner',
		youtubeId: 'cIko15SIf6o',
		appsUsed: ['superbloom']
	},
	{
		title: 'Thor Body Lightning VFX with Zeus + Progen Flares 2',
		description: 'Learn how to create a superhero effect inspired by Thor: Ragnarok. Also features SuperBloom and Color Theater.',
		difficulty: 'Advanced',
		youtubeId: 'tU7GKAZiZRM',
		appsUsed: ['superbloom', 'zeus', 'progenflares2', 'colortheater']
	},
	{
		title: 'Separate glows in SuperBloom',
		description: 'Learn how to use separate SuperBloom settings for different parts of an image.',
		difficulty: 'Beginner',
		youtubeId: '6ZKOJKxZdPc',
		appsUsed: ['superbloom']
	},
	{
		title: 'Use SuperBloom in a Mysterious Hallway Composite',
		description: 'Learn how to create a dramatic hallway scene and finish with SuperBloom.',
		difficulty: 'Advanced',
		youtubeId: 'R6GkQW0aZ-0',
		appsUsed: ['superbloom']
	},
	{
		title: 'Make a 3D Texture and Enhance it with SuperBloom + Color Theater',
		description: 'Learn how to create a pseudo-3D tile pattern and make it glow.',
		difficulty: 'Intermediate',
		youtubeId: 'DK6W6DxeXNs',
		appsUsed: ['superbloom', 'colortheater']
	}
];
