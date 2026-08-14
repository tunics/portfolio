import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({
        base: './src/content/projects',
        pattern: '**/index.md',
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
            summary: z.string(),
            cover: image(),
            coverAlt: z.string(),
            images: z
                .array(
                    z.object({
                        src: image(),
                        alt: z.string(),
                    }),
                )
                .default([]),
            videos: z
                .array(
                    z.object({
                        src: z.string(),
                        type: z.enum(['video/mp4', 'video/webm', 'video/ogg']),
                        title: z.string().optional(),
                    }),
                )
                .default([]),
            links: z
                .array(
                    z.object({
                        label: z.string(),
                        url: z.url(),
                    }),
                )
                .default([]),
            tags: z.array(z.string()).default([]),
            order: z.number().int().nonnegative(),
            published: z.boolean().default(true),
        }),
});

export const collections = { projects };
