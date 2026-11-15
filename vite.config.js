import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  server: {
    watch: { ignored: ['**/imagens/**'] },
  },
})
