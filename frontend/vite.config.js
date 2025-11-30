import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Replace `base` value with your GitHub repo name. Example: '/Medical-Chat-Bot-Ai/'
// This ensures asset paths are generated correctly for GitHub Pages
export default defineConfig({
  base: '/Medical-Chat-Bot-Ai/',
  plugins: [tailwindcss(),react()],
})
