/**
 * Left column: vertical timeline of ceremony titles. Highlights the item whose
 * `id` matches `activeEventId`. When that id changes (from main-column scroll),
 * the list scrolls so the active row stays visible inside the sticky panel.
 */
import { useEffect, useRef } from 'react'
import { TimelineItem } from './TimelineItem.jsx'

/**
 * @param {object} props
 * @param {Array<object>} props.events
 * @param {string} props.activeEventId — drives highlight + sidebar scroll sync
 * @param {(id: string) => void} props.onSelectEvent — scroll main column to section `id`
 */
export function Sidebar({ events, activeEventId, onSelectEvent }) {
  /** First sync jumps instantly; later ones animate so initial paint doesn’t “slide”. */
  const useInstantScrollOnce = useRef(true)

  useEffect(() => {
    const el = document.getElementById(`sidebar-event-${activeEventId}`)
    if (!el) return

    const behavior = useInstantScrollOnce.current ? 'auto' : 'smooth'
    useInstantScrollOnce.current = false

    el.scrollIntoView({
      behavior,
      block: 'nearest',
      inline: 'center',
    })
  }, [activeEventId])

  return (
    <aside className="sidebar" aria-label="Ceremony timeline">
      <nav className="sidebar__nav">
        <h2 className="sidebar__heading">Program</h2>
        <ul className="sidebar__timeline">
          {events.map((event) => (
            <li
              key={event.id}
              id={`sidebar-event-${event.id}`}
              className={`sidebar__timeline-item${
                event.id === activeEventId ? ' sidebar__timeline-item--active' : ''
              }`}
            >
              <TimelineItem
                title={event.title}
                isActive={event.id === activeEventId}
                onClick={() => onSelectEvent(event.id)}
              />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
