import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    github: z.string().optional(),
    npm: z.string().optional(),
    href: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
};
 
// idk how to implement slots in collections so that I can reference src/external/* components