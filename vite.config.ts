import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: "src/server/server.ts",
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
