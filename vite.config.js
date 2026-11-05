import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// `npm run build`         → sitio normal en /dist
// `npm run build:single`  → un solo index.html con todo incluido (para compartir)
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === "single" ? [viteSingleFile()] : [])],
  base: "./",
  build: mode === "single" ? { assetsInlineLimit: 100_000_000 } : {},
}));
