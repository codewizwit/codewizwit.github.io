import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["essay", "wizshort"]),
    number: z.number(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    experienceUrl: z.string().optional(),
  }),
});

/**
 * The idea corpus. Markdown is the source; these pages are derived from it,
 * which is the same shape das applies to documentation. Working copies with
 * the open questions still in them live outside the repo.
 */
const ideas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ideas" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Reading order, following the philosophy diagram top to bottom. */
    order: z.number(),
  }),
});

export const collections = { writing, ideas };
