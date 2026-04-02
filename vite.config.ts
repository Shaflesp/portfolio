import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main:       'index.html',
        cursus:     'pages/cursus.html',
        experience: 'pages/experience.html',
        portfolio:  'pages/portfolio.html',
      },
    },
  },

  server: {
    port: 5173,
  },
});
