/**
 * Maps `src/assets/*` filenames to Vite-resolved URLs (`?url`) for use in `<img src>`.
 * Keeps imports static at build time while letting `events.js` store plain filenames.
 */

const modules = import.meta.glob('../assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** basename → hashed asset URL from the bundler */
const urlByFilename = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const file = path.slice(path.lastIndexOf('/') + 1)
    return [file, url]
  })
)

const FALLBACK = urlByFilename['react.svg']

/**
 * @param {string | undefined} filename — e.g. `'react.svg'` (must exist in `src/assets/`)
 * @returns {string} public URL for the asset
 */
export function resolveEventIcon(filename) {
  if (!filename) return FALLBACK
  const url = urlByFilename[filename]
  if (!url) {
    console.warn(`[events] Missing icon "${filename}" in src/assets/`)
    return FALLBACK
  }
  return url
}
