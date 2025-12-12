import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      heroImage: image(),
      description: z.string(),
      title: z.string(),
      publishedAt: z.coerce.date(),
      // image: z.string(),
      // github: z.string().optional(),
      // npm: z.string().optional(),
      // href: z.string(),
    }),
});

export const collections = {
  projects: projectCollection,
};
