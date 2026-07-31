// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://codewizwit.github.io",
  trailingSlash: "ignore",
  build: { format: "directory" },
  redirects: {
    // The frameworks now live on wizwit lab. Send the old URLs to the real
    // pages instead of dropping visitors on the homepage.
    "/frameworks": "https://wizwit-lab.vercel.app/",
    "/frameworks/the-lift": "https://wizwit-lab.vercel.app/the-lift/",
    "/frameworks/four-lenses": "https://wizwit-lab.vercel.app/four-lenses/",
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
