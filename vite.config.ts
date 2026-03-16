import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/loomian-rally-sim/",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@components": resolve(__dirname, "./src/app/components"),
      "@styles": resolve(__dirname, "./src/app/styles"),
      "@hooks": resolve(__dirname, "./src/app/hooks"),
    }
  }
})