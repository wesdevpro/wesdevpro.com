import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
   collections: {
      blog: defineCollection({
         source: 'blog/*.md',
         type: 'page',
         schema: z.object({
            title: z.string(),
            tags: z.array(z.string()).optional(),
            date: z.coerce.date(),
            coverImage: z.string().optional(),
            author: z.string()
         })
      }),
      projects: defineCollection({
        source: 'projects/*.md',
        type: 'page',
        schema: z.object({
            name: z.string(),
            tags: z.array(z.string()).optional(),
            date: z.coerce.date(),
            repoUrl: z.string(),
            coverImage: z.string().optional(),
            collaberators: z.array(z.string()).optional()
        })
      }),
      authors: defineCollection({
        source: 'authors/**.json',
        type: 'data',
        schema: z.object({
            name: z.string().optional(),
            avatar: z.string().optional(),
            github: z.string().optional(),
            url: z.string().optional()
        })
      })
   }
})
