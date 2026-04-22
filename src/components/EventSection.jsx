/**
 * Single ceremony block in the main column: heading, copy, optional sub-steps,
 * and a right-aligned icon resolved from `event.icon` via `resolveEventIcon`.
 * The root `<section>`’s `id` must match `event.id` for scroll + observer wiring.
 */
import { resolveEventIcon } from '../data/resolveEventIcon.js'

/**
 * @param {object} props
 * @param {object} props.event — one entry from `events` (id, title, icon, iconScale, descriptions, subEvents…)
 */
export function EventSection({ event }) {
  const iconSrc = resolveEventIcon(event.icon)

  return (
    <section id={event.id} className="event-section" aria-labelledby={`${event.id}-heading`}>
      <div className="event-section__layout">
        <div className="event-section__inner">
          <h2 id={`${event.id}-heading`} className="event-section__title">
            {event.title}
          </h2>
          <div className="event-section__body">
            <p>{event.fullDescription}</p>
          </div>
          {event.subEvents?.length ? (
            <ol className="event-section__subevents">
              {event.subEvents.map((sub) => (
                <li key={sub.title} className="event-section__subevent">
                  <h3 className="event-section__subevent-title">
                    {sub.title}
                  </h3>
                  <p>{sub.description}</p>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
        <div className="event-section__icon-wrap">
          <img
            className="event-section__icon"
            src={iconSrc}
            alt=""
            width={120}
            height={120}
            style={event.iconScale ? { transform: `scale(${event.iconScale})` } : undefined}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
