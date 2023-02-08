import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // se utiliza el puerto 3000
  server: {
    port: 3000
  },
  plugins: [react()],
})
