import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base defaults to '/' — correct for Vercel / any root deployment
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
