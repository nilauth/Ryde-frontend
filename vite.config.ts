import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',  // Ajoutez cette ligne pour écouter sur toutes les interfaces réseau
    port: 5173       // Vous pouvez également spécifier le port si nécessaire
  }
});
