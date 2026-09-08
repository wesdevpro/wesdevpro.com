import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(z.string()).optional(),
        date: z.coerce.date(),
        coverImage: z.string().optional(),
        author: z.string(),
      }),
    }),
    work: defineCollection({
      source: "work/*.md",
      type: "page",
      schema: z.object({
        name: z.string(),
        description: z.string().optional(),
        client: z.string().optional(), // omit for non-client work (Buefy) — never guess
        sector: z.string().optional(),
        tags: z.array(z.string()).optional(), // doubles as "stack" metadata, rendered mono
        date: z.coerce.date(),
        dateVerified: z.boolean().optional(), // set false when `date` is a known placeholder — render code hides the date instead of showing an unverified value; omitted/true = render normally
        order: z.number().optional(), // explicit sort key: 1 = Imagine Land Works, 2 = Buefy, 3 = BlueBird Theatre
        featured: z.boolean().optional(), // drives the has-keyline treatment on the Work index
        concept: z.boolean().optional(), // drives the "Concept" label on the card + case-study page for non-delivered work
        repoUrl: z.string().optional(), // client work may have no public repo
        liveUrl: z.string().optional(), // the deployed site, if it's public — surfaced as a clear link, not buried in body prose
        coverImage: z.string().optional(),
        screenshots: z.array(z.string()).optional(),
        testimonial: z.object({
          quote: z.string(),
          author: z.string(),
          business: z.string().optional(),
        }).optional(), // entire object optional — never author a placeholder quote
        collaborators: z.array(z.string()).optional(),
        stat: z.object({
          value: z.string(),
          label: z.string(),
        }).optional(), // one real, structured headline figure for the asymmetric proof tile — never a placeholder value
      }),
    }),
    services: defineCollection({
      source: "services/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        whoFor: z.string().optional(),
        includes: z.array(z.string()).optional(),
        excludes: z.array(z.string()).optional(),
        startingPrice: z.string().optional(), // omit entirely, never a literal placeholder string
        order: z.number().optional(),
      }),
    }),
    authors: defineCollection({
      source: "authors/**.json",
      type: "data",
      schema: z.object({
        name: z.string().optional(),
        avatar: z.string().optional(),
        github: z.string().optional(),
        url: z.string().optional(),
      }),
    }),
  },
});
