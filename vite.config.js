import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path'; // Importing the path module

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      pages: [
        { 
          entry: path.resolve(__dirname, 'src/entries/cookies_main.jsx'), 
          filename: 'cookies.html', 
          template: path.resolve(__dirname, 'public/cookies.html') 
        },
        { entry: path.resolve(__dirname, 'src/entries/permissions_main.jsx'), 
          filename: 'permissions.html', 
          template: path.resolve(__dirname, 'public/permissions.html')
        },
    ]}),
    viteSingleFile(),
  ],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        cookies: path.resolve(__dirname, 'public/cookies.html'),
        permissions: path.resolve(__dirname, 'public/permissions.html')
      },
      emptyOutDir: false,
      output: {
        format: 'es',
        preserveModules: true,
      }
    },
  },

  base: './'
});

