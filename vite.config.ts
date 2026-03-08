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
      "@components": resolve(__dirname, "./src/app/components"),
      "@styles": resolve(__dirname, "./src/app/styles"),
    }
  }
})