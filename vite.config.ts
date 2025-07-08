import { reactRouter } from '@react-router/dev/vite';

import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

import path from 'path'

export default defineConfig({
  root: 'frontend',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  publicDir: path.resolve(__dirname, 'frontend/public')
});
