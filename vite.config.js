import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CIOGame04/",   // 👈 repo adı
  build: {
    outDir: "docs",      // 👈 Pages buradan servis edecek
  },
});