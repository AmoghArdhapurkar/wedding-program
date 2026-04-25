/**
 * Root layout: sticky sidebar + scrollable main column.
 * Owns `activeEventId` so the timeline highlight matches the section in view.
 */
import { useCallback, useState } from 'react'
import { events } from './data/events.js'
import { Sidebar } from './components/Sidebar.jsx'
import { MainContent } from './components/MainContent.jsx'
import './App.css'

function App() {
  const [activeEventId, setActiveEventId] = useState('welcome')

  /** Called when scroll position implies a different “current” section. */
  const handleActiveEventChange = useCallback((id) => {
    setActiveEventId(id)
  }, [])

  /** Sidebar click: set highlight immediately, then smooth-scroll (scroll events can lag or omit the final tick). */
  const handleSelectEvent = useCallback((id) => {
    setActiveEventId(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }, [])

  if (!events.length) {
    return <div className="app app--empty">No ceremony events to display.</div>
  }

  return (
    <div className="app">
      <Sidebar
        events={events}
        activeEventId={activeEventId}
        onSelectEvent={handleSelectEvent}
      />
      <MainContent events={events} onActiveEventChange={handleActiveEventChange} />
    </div>
  )
}

export default App
