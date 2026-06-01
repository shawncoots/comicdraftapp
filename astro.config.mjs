// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Comic Draft',
			social: [],
			customCss: [
				'./src/styles/tokens.css',
				'./src/styles/starlight.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'User Guide', slug: 'guides/user-guide' },
					],
				},
			],
		}),
	],
});
