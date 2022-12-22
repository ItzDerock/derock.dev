import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  ssr: {
    noExternal: [
      // "swiper",
      // "swiper/solid",
      // "solid-icons"
    ],
  }
});
