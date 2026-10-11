// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	// Custom domain served by GitHub Pages. Because this is an apex domain
	// there is no `base` path — internal links like /contact resolve as-is.
	site: 'https://comicdraft.app',
	integrations: [
		starlight({
			title: 'ComicDraft',
			// Starlight serves the logo as-is rather than running it through
			// Astro's image pipeline, so point it at a pre-sized 96px webp
			// instead of the full-resolution icon used by the marketing hero.
			logo: {
				src: './src/assets/appicon-nav.webp',
			},
			favicon: '/favicon-32.png',
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				},
				// Starlight adds the other Open Graph tags itself but has no share image.
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://comicdraft.app/og-image.png' },
				},
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://comicdraft.app/og-image.png' },
				},
			],
			social: [],
			tableOfContents: false,
			components: {
				Sidebar: './src/components/Sidebar.astro',
				Head: './src/components/Head.astro',
			},
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
						{ label: 'Working with Files', slug: 'guides/files' },
						{ label: 'Settings', slug: 'guides/settings' },
						{ label: 'Preview & Export', slug: 'guides/preview-export' },
						{ label: 'Keyboard Shortcuts', slug: 'guides/keyboard-shortcuts' },
						{ label: 'Tips & Conventions', slug: 'guides/tips' },
						{ label: 'Cross-Platform Notes', slug: 'guides/cross-platform' },
					],
				},
				{
					label: 'Learn Comic Scripting',
					// Ordered by each article's `sidebar.order` frontmatter.
					items: [{ autogenerate: { directory: 'learn' } }],
				},
			],
		}),
	],
});
