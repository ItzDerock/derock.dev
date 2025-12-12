import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import { defineConfig, envField } from "astro/config";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), icon(), mdx()],

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

      GITHUB_PAT: envField.string({
        context: "server",
        access: "secret",
      }),

      VERCEL_GIT_COMMIT_SHA: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },

  output: "server",

  adapter: vercel({
    isr: {
      expiration: /* 5 minutes */ 5 * 60 * 1000,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});