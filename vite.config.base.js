import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

const createConfig = (entry, filename, template, outputDir) => defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      pages: {
        [filename]: {
          entry: path.resolve(__dirname, entry),
          template: path.resolve(__dirname, template),
        }
      }
    }),
    viteSingleFile(),
  ],
  build: {
    minify: false,
    rollupOptions: {
      input: path.resolve(__dirname, template),
      output: {
        format: 'es',
      }
    },
    outDir: path.resolve(__dirname, outputDir),
    emptyOutDir: false,
  },
  publicDir: false, 
  base: './'
});

export default createConfig;
