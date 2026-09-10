import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://antora-supplemental.org",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
