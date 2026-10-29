import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts live as Markdown files in src/content/blog/.
 * Add a new post by creating a new .md file there — the file name becomes the
 * web address (my-post.md -> /blog/my-post).
 *
 * Every post starts with a "front matter" block between --- lines. The fields
 * below are checked at build time, so a typo (e.g. a missing date or a
 * misspelled category) shows a clear error instead of a broken page.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** Short summary shown on cards and in search/social previews. */
        description: z.string(),
        pubDate: z.coerce.date(),
        category: z.enum(['Legislation', 'Research', 'Community']),
        /** Optional photo. Put the file in src/assets/ and point to it, e.g. ../../assets/capitol.jpg */
        image: image().optional(),
        /** Describe the photo for people who can't see it. Required when `image` is set. */
        imageAlt: z.string().optional(),
        /** Text shown on the striped placeholder while a post has no photo yet. */
        imageLabel: z.string().optional(),
        /** Set to true to hide a post without deleting it. */
        draft: z.boolean().default(false),
      })
      .refine((post) => !post.image || post.imageAlt, {
        message: 'Add an `imageAlt` description whenever a post has an `image`.',
        path: ['imageAlt'],
      }),
});

export const collections = { blog };
