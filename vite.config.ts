import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tantuui from "@tantuui/tokens/vite";

export default defineConfig({
  plugins: [react(), tantuui()],
});
