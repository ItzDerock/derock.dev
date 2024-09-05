/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },

      colors: {
        background: {
          light: "#FFF5F5",
          dark: "#000814",
        },

        // Used for big texts
        foreground: {
          light: "#3E3E3E",
          dark: "#F9FAFB",
        },

        // Used for paragraphs
        text: {
          light: "#3E3E3E",
          dark: "#e5e5e5",
        },

        // muted text
        muted: {
          light: "#6B7280",
          dark: "#6B7280",
        },

        // slightly ligher than the background
        card: {
          dark: "#0F1827",
          light: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
