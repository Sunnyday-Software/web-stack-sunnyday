import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const components = defineCollection({
    loader: glob({pattern: "**\/*.md", base: "docs/components"}),
    /*
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),*/
})

export const collections = {components}