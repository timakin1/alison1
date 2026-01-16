import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/REPO_NAME/',   // ← replace with your GitHub repo name
  plugins: [react()],
})
