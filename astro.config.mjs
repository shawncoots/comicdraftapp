// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Comic Draft',
			social: [],
			tableOfContents: false,
			customCss: [
				'./src/styles/tokens.css',
				'./src/styles/starlight.css',
			],
			sidebar: [
				{
					label: 'User Guide',
					items: [
						{ label: 'The Library', slug: 'guides/library' },
						{ label: 'Writing a Script', slug: 'guides/writing-a-script' },
						{ label: 'Inline Formatting', slug: 'guides/inline-formatting' },
						{ label: 'Characters & Cast', slug: 'guides/characters' },
						{ label: 'Outline (Beats)', slug: 'guides/outline' },
						{ label: 'Notes', slug: 'guides/notes' },
						{ label: 'Settings', slug: 'guides/settings' },
						{ label: 'Preview & Export', slug: 'guides/preview-export' },
						{ label: 'Keyboard Shortcuts', slug: 'guides/keyboard-shortcuts' },
						{ label: 'Tips & Conventions', slug: 'guides/tips' },
						{ label: 'Cross-Platform Notes', slug: 'guides/cross-platform' },
					],
				},
			],
		}),
	],
});
