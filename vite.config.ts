import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        blog: resolve(import.meta.dirname, 'blog.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/three/')) return 'vendor';
        },
      },
    },
  },
});
