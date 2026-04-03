/**
 * Vite bundler config: React plugin for JSX/refresh. Add aliases or build tweaks here.
 * @see https://vite.dev/config/
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub project Pages: set VITE_BASE_PATH=/your-repo-name/ in CI (see workflow).
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})
