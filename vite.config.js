/**
 * Vite bundler config: React plugin for JSX/refresh. Add aliases or build tweaks here.
 * @see https://vite.dev/config/
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // `./` for production so assets resolve on GitHub Pages (`/user/repo/`) without a
  // hard-coded repo name. `'/'` locally so the dev server matches default expectations.
  base: command === 'serve' ? '/' : './',
  plugins: [react()],
}))
