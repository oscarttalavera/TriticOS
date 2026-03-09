import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for Electron: assets must use relative paths when
  // loaded from the filesystem (file://) rather than a web server.
  base: './',
})
