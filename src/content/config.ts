import { defineCollection, z } from 'astro:content';

// Shared schema for all content types
const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.date().optional(),
  updated: z.date().optional(),
  cover: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
});

// Music-specific fields
const musicCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    album: z.string().optional(),
    year: z.number().optional(),
    spotify: z.string().optional(),
    soundcloud: z.string().optional(),
    bandcamp: z.string().optional(),
    youtube: z.string().optional(),
  }),
});

// Art-specific fields
const artCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    medium: z.string().optional(),
    location: z.string().optional(),
    collaborators: z.array(z.string()).optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

// Research-specific fields
const researchCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.enum(['paper', 'talk', 'panel', 'podcast']).optional(),
    venue: z.string().optional(),
    coauthors: z.array(z.string()).optional(),
    pdf: z.string().optional(),
    video: z.string().optional(),
  }),
});

// Building (projects/companies)
const buildingCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    role: z.string().optional(),
    company: z.string().optional(),
    url: z.string().optional(),
    status: z.enum(['active', 'archived', 'acquired', 'invested']).optional(),
  }),
});

// Writing (blog posts, essays)
const writingCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    publication: z.string().optional(),
    external_url: z.string().optional(),
  }),
});

// Ideas (frameworks, theories)
const ideasCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    status: z.enum(['seed', 'growing', 'mature']).optional(),
    related: z.array(z.string()).optional(),
  }),
});

// Stan (people/things you love)
const stanCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    category: z.enum(['person', 'place', 'thing', 'idea', 'artist', 'book', 'album']).optional(),
    url: z.string().optional(),
    quote: z.string().optional(),
  }),
});

// Meme Dumpster (chaos)
const memeDumpsterCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    mood: z.string().optional(),
    source: z.string().optional(),
  }),
});

export const collections = {
  'music': musicCollection,
  'art': artCollection,
  'research': researchCollection,
  'building': buildingCollection,
  'writing': writingCollection,
  'ideas': ideasCollection,
  'stan': stanCollection,
  'meme-dumpster': memeDumpsterCollection,
};
