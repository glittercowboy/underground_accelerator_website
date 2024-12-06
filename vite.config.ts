import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        calculator: './src/calculator.html',
        embed: './src/embed.html'
      },
    },
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
