import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allows Vite to listen on all network interfaces
    port: 8080   // Ensure this matches the port exposed in your Dockerfile
  }
});
