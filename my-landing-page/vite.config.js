import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/3ryk-ProgP/my-landing-page/',
  plugins: [react()],
})