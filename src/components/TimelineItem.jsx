export function TimelineItem({ title, shortDescription, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`timeline-item${isActive ? ' timeline-item--active' : ''}`}
      onClick={onClick}
    >
      <span className="timeline-item__title">{title}</span>
      {shortDescription ? (
        <span className="timeline-item__short">{shortDescription}</span>
      ) : null}
    </button>
  )
}
