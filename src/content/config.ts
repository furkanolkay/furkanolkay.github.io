import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    cover: z.object({
      image: z.string().optional(),
      hidden: z.boolean().optional(),
      hiddenInList: z.boolean().optional(),
      hiddenInSingle: z.boolean().optional(),
    }).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    categories: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
    cover: z.object({
      image: z.string().optional(),
      hidden: z.boolean().optional(),
      hiddenInList: z.boolean().optional(),
      hiddenInSingle: z.boolean().optional(),
    }).optional(),
  }),
});

export const collections = { blog, projects };

