import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Dateien mit "_" am Anfang (z. B. _VORLAGE.md) werden ignoriert
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Hochzeiten', 'Familie', 'Paare']),
    date: z.date(),
    cover: z.string(),
    coverPosition: z.string().optional().default('50% 50%'),
    heroPosition: z.string().optional().default('center top'),
  }),
});

export const collections = { blog };
