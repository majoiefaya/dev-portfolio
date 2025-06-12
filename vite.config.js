import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        platformIntern: 'platform-intern.html',
        sae: 'sae.html',
        viewpo: 'viewpo.html',
      },
    },
  },
});
