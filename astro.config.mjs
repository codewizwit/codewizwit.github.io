// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://codewizwit.github.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
  redirects: {
    // The frameworks came home. These forwarded out to wizwit lab; now they
    // land on /philosophy, which is one page. The diagram is the index, and
    // every framework on it opens in place, so there are no child pages to
    // point at.
    "/frameworks": "/philosophy",
    "/frameworks/the-lift": "/philosophy",
    "/frameworks/four-lenses": "/philosophy",
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
