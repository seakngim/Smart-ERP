import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // change port
  },
  optimizeDeps: {
    include: ["tsparticles-engine", "tsparticles-slim", "react-tsparticles"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          recharts: ['recharts'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          icons: ['@mui/icons-material'],
        },
      },
    },
  },
})
