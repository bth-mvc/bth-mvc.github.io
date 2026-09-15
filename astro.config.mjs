// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-mvc.github.io/',
	base: '/',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
			],
			title: 'Kursen mvc',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/bth-mvc/bth-mvc.github.io/tree/main',
			},
			social: [
    			{ icon: 'github', label: 'GitHub', href: 'https://github.com/bth-mvc/bth-mvc.github.io' }
			],
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: ''
				  }
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					items: [{ autogenerate: { directory: 'intro' } }],
				},
				{
					label: 'Labbmiljö',
					collapsed: true,
					items: [{ autogenerate: { directory: 'labbmiljo' } }],
				},
				{
					label: 'Kursrepo',
					collapsed: true,
					items: [{ autogenerate: { directory: 'kursrepo' } }],
				},
				{ slug: 'kmom01' },
				{ slug: 'kmom02' },
				{ slug: 'kmom03' },
				{ slug: 'kmom04' },
				{ slug: 'kmom05' },
				{ slug: 'kmom06' },
				{ slug: 'kmom10' },
				{
					label: 'Studieguide',
					collapsed: true,
					items: [{ autogenerate: { directory: 'studieguide' } }],
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
			],
		}),
	],
});
