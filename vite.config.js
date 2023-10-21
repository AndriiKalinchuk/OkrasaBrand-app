import { defineConfig } from "vite";
import glob from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "OkrasaBrand-app",
  base: "/",

  build: {
    rollupOptions: {
      input: glob.sync("./OkrasaBrand-app/*.html"),
    },
    outDir: "../dist",
  },

  plugins: [injectHTML(), FullReload(["./Okrasa-app/**/*.html"])],
});
