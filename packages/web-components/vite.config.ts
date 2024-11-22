import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "web-components",
      fileName: (format) => `index.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: ["lit"],
      output: {
        preserveModules: true,
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },

    cssCodeSplit: true,
  },
});
