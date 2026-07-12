import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages deploys from the repository subpath.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/TankStack/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
