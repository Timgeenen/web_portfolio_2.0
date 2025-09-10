import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs'
  },
  server: {
    host: true,
    port: 5500
  },
  resolve: {
    alias: {
      "@Data": path.resolve(__dirname, "src/data/index.ts"),
      "@Hooks": path.resolve(__dirname, "src/hooks/index.ts"),
      "@Layouts": path.resolve(__dirname, "src/components/layout/index.ts"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Sections": path.resolve(__dirname, "src/components/sections/index.ts"),
      "@UI": path.resolve(__dirname, "src/components/ui/index.ts"),
      "@Utils": path.resolve(__dirname, "src/utils/index.ts"),
    },
  },
});
