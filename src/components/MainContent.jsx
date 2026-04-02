/**
 * Scrollable main column: one `EventSection` per ceremony entry.
 * Registers an IntersectionObserver on each section so the sidebar can track
 * which event is in the viewport “focus” band (see rootMargin).
 */
import { useLayoutEffect } from 'react'
import { EventSection } from './EventSection.jsx'

/**
 * @param {object} props
 * @param {Array<object>} props.events — rows from `data/events.js` (each has `id`, etc.)
 * @param {(id: string) => void} props.onActiveEventChange — updates App’s `activeEventId`
 */
export function MainContent({ events, onActiveEventChange }) {
  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting)
        if (!intersecting.length) return
        // If several sections overlap the band, pick the strongest match.
        const best = intersecting.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        )
        onActiveEventChange(best.target.id)
      },
      {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      }
    )

    for (const event of events) {
      const el = document.getElementById(event.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [events, onActiveEventChange])

  return (
    <main className="main-content">
      {events.map((event) => (
        <EventSection key={event.id} event={event} />
      ))}
    </main>
  )
}
