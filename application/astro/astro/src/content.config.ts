import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const components = defineCollection({
    loader: glob({pattern: "**\\/[^_]*.md", base: "./src/content/docs"}),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        author: z.string().optional(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        layout: z.string().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
})

export const collections = {components};