import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    loader: 'jsx',
    include: ['src/**/*.js', 'src/**/*.jsx'],
    exclude: [],
  },
  server: {
    host: true, // ⭐ 關鍵
    port: 5173, // 可選，跟你 ngrok 的 port 對齊
    strictPort: true, // 可選
    allowedHosts: [''],
  },
});
