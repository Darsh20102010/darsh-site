import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIES = [
  'AI Fundamentals', 'Machine Learning', 'Computer Vision', 'Robotics', 'Computer Science',
  'Algorithms', 'AI Ethics', 'Technology & Society', 'AI Applications',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    number: z.number().optional(),
    date: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    description: z.string(),
    image: z.string().optional(),
    takeaways: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    role: z.string(),
    status: z.string(),
    statusKind: z.enum(['project', 'ongoing', 'published', 'future']).default('project'),
    order: z.number().default(10),
    featured: z.boolean().default(false),
    description: z.string(),
    image: z.string().optional(),
    demo: z.string().optional(),
    portrait: z.string().optional(),
    location: z.string().optional(),
    features: z.array(z.object({ name: z.string(), text: z.string() })).default([]),
    tech: z.array(z.string()).default([]),
    pipeline: z.array(z.object({ k: z.string(), v: z.string().optional() })).default([]),
    gallery: z.array(z.object({ label: z.string(), src: z.string().optional() })).default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    status: z.string(),
    statusKind: z.enum(['published', 'ongoing', 'future']),
    role: z.string(),
    order: z.number().default(10),
    description: z.string(),
    themes: z.array(z.string()).default([]),
    paperUrl: z.string().optional(),
    venue: z.string().optional(),
    paperTitle: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog, projects, research };
