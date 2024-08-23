import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
  optimizeDeps: {
    exclude: ['chunk-IU5JCZQL', 'chunk-HKJ2B2AA'], // Add the problematic chunks here
  },
})
