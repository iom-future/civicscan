import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path configuration:
// - Uses '/civicscan/' when building in GitHub Actions for GitHub Pages
// - Defaults to '/' for local development and future Vercel deployment
const base = process.env.BASE_PATH || (process.env.GITHUB_ACTIONS ? '/civicscan/' : '/')

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
  },
})
