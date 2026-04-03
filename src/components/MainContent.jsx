/**
 * Scrollable main column: one `EventSection` per ceremony entry.
 * Scrollspy: map viewport midline Y to the “current” section. Page top/bottom are
 * explicit so a short first (or last) block never loses highlight when the center
 * falls past it while scroll position is still at the start/end of the document.
 */
import { useLayoutEffect, useRef } from 'react'
import { EventSection } from './EventSection.jsx'

/**
 * @param {object} props
 * @param {Array<object>} props.events — rows from `data/events.js` (each has `id`, etc.)
 * @param {(id: string) => void} props.onActiveEventChange — updates App’s `activeEventId`
 */
export function MainContent({ events, onActiveEventChange }) {
  const lastEmittedId = useRef(null)

  useLayoutEffect(() => {
    lastEmittedId.current = null

    const sectionEls = () =>
      events.map((e) => document.getElementById(e.id)).filter(Boolean)

    /**
     * Assign midline to section i when lineY ∈ [topᵢ, topᵢ₊₁) so gaps belong to the
     * section above. Near document start/end, pin to first/last so short sections
     * still win when the center sits below/above their box at scroll 0 / max.
     */
    const pickActiveId = () => {
      const els = sectionEls()
      if (!els.length) return null

      const viewH = window.innerHeight
      const lineY = viewH * 0.5
      const scrollY =
        window.scrollY ?? document.documentElement.scrollTop ?? 0
      const docH = document.documentElement.scrollHeight
      const maxScroll = Math.max(0, docH - viewH)

      const edgePx = 3
      if (scrollY <= edgePx) {
        return els[0].id
      }
      if (maxScroll > 0 && scrollY >= maxScroll - edgePx) {
        return els[els.length - 1].id
      }

      const firstTop = els[0].getBoundingClientRect().top
      if (lineY < firstTop) {
        return els[0].id
      }

      for (let i = 0; i < els.length; i++) {
        const top = els[i].getBoundingClientRect().top
        const nextTop =
          i + 1 < els.length
            ? els[i + 1].getBoundingClientRect().top
            : Infinity
        if (lineY >= top && lineY < nextTop) {
          return els[i].id
        }
      }

      return els[els.length - 1].id
    }

    let rafId = 0

    const sync = () => {
      rafId = 0
      const id = pickActiveId()
      if (id == null) return
      if (lastEmittedId.current !== id) {
        lastEmittedId.current = id
        onActiveEventChange(id)
      }
    }

    const onScrollOrResize = () => {
      if (rafId) return
      rafId = requestAnimationFrame(sync)
    }

    const scrollingEl = document.scrollingElement ?? document.documentElement

    sync()

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    scrollingEl.addEventListener('scrollend', sync)

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      scrollingEl.removeEventListener('scrollend', sync)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [events, onActiveEventChange])

  return (
    <main className="main-content">
      {events.map((event) => (
        <EventSection key={event.id} event={event} />
      ))}
    </main>
  )
}
