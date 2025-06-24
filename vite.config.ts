import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/chatbot-widget.ts",
      name: "ChatbotWidget",
      fileName: "chatbot",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        // S'assurer que ChatbotWidget est exposé globalement
        extend: true,
        exports: "named",
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 3000,
  },
});
