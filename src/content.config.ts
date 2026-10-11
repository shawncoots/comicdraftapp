import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			// Article dates for /learn/ pages, used in their Article JSON-LD.
			extend: z.object({
				datePublished: z.coerce.date().optional(),
				dateModified: z.coerce.date().optional(),
			}),
		}),
	}),
};
