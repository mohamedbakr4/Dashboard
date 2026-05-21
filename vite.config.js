import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Dashboard/',  // مثلاً: '/React-Admin-Dashboard-master/'
  plugins: [react()],
})
