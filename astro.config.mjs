// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				// Generate the OpenAPI documentation pages.
				starlightOpenAPI([
				  {
				   base: 'api',
				   label: 'My API',
				   schema: './src/schemas/apihub.json',
				  },
				]),
			  ],
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				 // Add the generated sidebar group to the sidebar.
				 ...openAPISidebarGroups,
			],
		}),
	],
});
