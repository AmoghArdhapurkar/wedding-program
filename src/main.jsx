/**
 * Application entry: mounts the React tree on `#root` and loads global styles.
 * StrictMode enables extra dev checks (double-invoked effects, deprecated APIs).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
