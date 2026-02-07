import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['dispatch', 'field-note', 'side-piece', 'case-study', 'think-piece']),
    number: z.number(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = { writing };
