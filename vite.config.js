import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// `npm run build`         → sitio normal en /dist
// `npm run build:single`  → un solo index.html con todo incluido (para compartir)
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === "single" ? [viteSingleFile()] : [])],
  // El sitio se publica en la raíz del dominio: https://saintcharlesschool.github.io/
  // (la versión de un solo archivo usa rutas relativas para poder abrirse sin servidor)
  base: mode === "single" ? "./" : "/",
  build: mode === "single" ? { assetsInlineLimit: 100_000_000 } : {},
}));
