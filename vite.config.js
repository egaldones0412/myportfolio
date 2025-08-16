import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Develop inside ./app, and write the production build to the repo root (../).
export default defineConfig({
  root: "app",
  plugins: [react()],
  base: "/",
  publicDir: "public",   // important: relative to the Vite root ("app")
  build: {
    outDir: "../",       // write production files to repository root
    emptyOutDir: false,  // do not wipe the repo root
    sourcemap: false
  }
});
