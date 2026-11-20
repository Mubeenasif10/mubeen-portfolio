
import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section id="home" className="hero premium-hero">
      <div className="container premium-hero-grid">
        <div className="premium-hero-content">
          <div className="premium-hero-status">
            <span className="premium-status-dot" />
            <span>Available for Web Development Projects</span>
          </div>

          <p className="premium-hero-eyebrow">
            {profile.title}
          </p>

          <h1>
            Muhammad Mubeen
            <span>Asif.</span>
          </h1>

          <h2 className="premium-hero-headline">
            {profile.headline}
          </h2>

          <p className="premium-hero-description">
            {profile.introduction} I enjoy turning ideas into
            meaningful digital experiences through clean design
            and functional development.
          </p>

          <div className="premium-hero-actions">
            <a className="premium-hero-primary" href="#projects">
              Explore My Projects
              <span aria-hidden="true">↗</span>
            </a>

            <a className="premium-hero-secondary" href="#contact">
              Let's Connect
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="premium-hero-secondary"
              href="/Muhammad-Mubeen-Asif-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="premium-hero-social">
            <span className="premium-social-label">
              FIND ME ONLINE
            </span>

            <SocialLinks items={profile.socials} />
          </div>
        </div>

        <div className="premium-hero-visual">
          <div className="premium-hero-glow" />

          <div className="premium-hero-image-frame">
            <div className="premium-hero-image-inner">
              <img
                src="/images/mubeen-profile.jpg"
                alt="Muhammad Mubeen Asif - Full Stack Web Developer"
                className="premium-hero-photo"
              />
            </div>
          </div>

          <div className="premium-hero-image-decoration" />

          <div className="premium-hero-floating-card">
            <span className="premium-floating-icon">✳</span>

            <div>
              <strong>Creative Developer</strong>
              <span>Designing & Building for the Web</span>
            </div>
          </div>

          <div className="premium-hero-location">
            <span className="premium-location-dot" />
            Based in Pakistan
          </div>
        </div>
      </div>

      <div className="premium-hero-bottom">
        <div className="container premium-hero-bottom-inner">
          <span>DESIGN</span>
          <span className="premium-bottom-line" />
          <span>DEVELOPMENT</span>
          <span className="premium-bottom-line" />
          <span>DIGITAL EXPERIENCES</span>
        </div>
      </div>
    </section>
  )
}
