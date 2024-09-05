import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig, envField } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), icon()],
  experimental: {
    env: {
      schema: {
        OPENWEATHERMAP_KEY: envField.string({
          context: "server",
          access: "secret",
        }),
        OPENWEATHERMAP_LAT: envField.number({
          context: "server",
          access: "secret",
        }),
        OPENWEATHERMAP_LON: envField.number({
          context: "server",
          access: "secret",
        }),

        LASTFM_API_KEY: envField.string({
          context: "server",
          access: "secret",
        }),

        LASTFM_USERNAME: envField.string({
          context: "server",
          access: "public",
        }),
      },
    },
  },

  output: "server",
  adapter: vercel({
    isr: {
      expiration: /* 5 minutes */ 5 * 60 * 1000,
    },
  }),
});
