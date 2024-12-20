import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://daydamdui.com",
    }),
  ],
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Chỉ định alias "@" cho thư mục src
    },
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src"), // Alias "@" to the "src" folder
  //   },
  // },
});
