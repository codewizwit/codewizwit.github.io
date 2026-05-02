// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://codewizwit.github.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
  redirects: {
    "/frameworks": "/",
    "/frameworks/the-lift": "/",
    "/frameworks/four-lenses": "/",
    "/projects": "/#work",
    "/connect": "/about",
    "/speaking": "/about",
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
