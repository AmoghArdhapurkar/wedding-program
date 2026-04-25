/** Google Photos shared album for guest uploads */
const WEDDING_PHOTOS_URL = 'https://photos.app.goo.gl/XbUwsyJYFHduVLwU6'

/**
 * Opening block above the ceremony program: greeting and link to share photos.
 */
export function WelcomeSection() {
  return (
    <section id="welcome" className="welcome-section" aria-labelledby="welcome-heading">
      <div className="welcome-section__inner">
        <h2 id="welcome-heading" className="welcome-section__title">
          Welcome
        </h2>
        <p className="welcome-section__lead">
          We are so glad you could join us to celebrate Nishita and Vishal! Your presence
          means the world to us, and we hope you enjoy every moment of the day!
        </p>
        <p className="welcome-section__body">
          If you capture photos or videos along the way, we would love to see them.
          Please add them to our shared album so we can relive the memories together.
        </p>
        <a
          className="welcome-section__photos-link"
          href={WEDDING_PHOTOS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open the wedding album on Google Photos
        </a>
      </div>
    </section>
  )
}
