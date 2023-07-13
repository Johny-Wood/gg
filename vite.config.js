import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "https://johny-wood.github.io/",
  build: {
    rollupOptions: {
      sourcemapBaseUrl: "https://johny-wood.github.io/gg",
      // https://rollupjs.org/configuration-options/
    },
  },
});
