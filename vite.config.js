import { resolve } from 'path';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        activities: resolve(import.meta.dirname, 'activities.html'),
        activityDetail: resolve(import.meta.dirname, 'activity-detail.html'),
        gallery: resolve(import.meta.dirname, 'gallery.html'),
        join: resolve(import.meta.dirname, 'join.html'),
        programs: resolve(import.meta.dirname, 'programs.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-assets-folder',
      closeBundle() {
        const distAssets = path.resolve(import.meta.dirname, 'dist/assets');
        const srcAssets = path.resolve(import.meta.dirname, 'assets');
        if (fs.existsSync(srcAssets)) {
          fs.cpSync(srcAssets, distAssets, { recursive: true });
        }
      },
    },
  ],
  server: {
    port: 5173,
    open: false,
  },
});
