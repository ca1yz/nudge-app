import { fileURLToPath, URL } from 'node:url';
import { hostUrl } from './config';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSingleFile } from 'vite-plugin-singlefile';

const targetUrl = hostUrl;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(),
        createHtmlPlugin(),
        viteSingleFile(),],
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '/api': {
                target: targetUrl,
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
        port: 5173,
    }
})
