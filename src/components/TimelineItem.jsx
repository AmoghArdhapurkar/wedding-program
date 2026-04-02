/**
 * One clickable row in the sidebar timeline (title only). Styling reflects `isActive`.
 */
export function TimelineItem({ title, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`timeline-item${isActive ? ' timeline-item--active' : ''}`}
      onClick={onClick}
    >
      <span className="timeline-item__title">{title}</span>
    </button>
  )
}
