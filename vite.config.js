import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/UMNG_integracion_multimedia/',
  plugins: [react()],
})
