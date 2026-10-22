import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkDirective from "remark-directive";
import remarkEvidence from "./src/markdown/remark-evidence.mjs";

export default defineConfig({
  site: "https://biochemistry.one",
  trailingSlash: "always",
  build: { format: "directory" },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkEvidence],
    }),
  },
});
