import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base is '/Cursor-test/' only for GitHub Pages production builds;
// dev server always serves from root '/'
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Cursor-test/' : '/',
  server: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 5173,
  },
}))
