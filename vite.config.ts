import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// BASE_PATH is set when deploying to GitHub Pages (e.g. /FLASHCARDS/)
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || '/',
})
