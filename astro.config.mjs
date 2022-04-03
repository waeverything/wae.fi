import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroImagePlugin from "astro-imagetools/plugin";

// https://astro.build/config
export default defineConfig({
  site: "https://wae.fi",
  integrations: [
    tailwind(
      {
        config: {
          applyAstroPreset: false
        }
      }
    )
  ],
  vite: {
    plugins: [astroImagePlugin],
  },
});
