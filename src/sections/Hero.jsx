
import { profile } from '../data/profile'
import SocialLinks from '../components/SocialLinks'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{profile.title}</p>

          <h1>{profile.name}</h1>

          <p className="hero-headline">{profile.headline}</p>

          <p className="hero-intro">{profile.introduction}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>

            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>

            <a
              className="btn btn-secondary"
              href="/Muhammad-Mubeen-Asif-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Muhammad-Mubeen-Asif-CV.pdf"
            >
              Download CV
            </a>
          </div>

          <SocialLinks items={profile.socials} />
        </div>

        <aside className="hero-panel" aria-label="Core expertise">
          <p className="panel-kicker">Core Expertise</p>

          <ul>
            <li>
              <strong>Frontend Development</strong>
              <span>
                Modern React interfaces and responsive web layouts.
              </span>
            </li>

            <li>
              <strong>Backend Development</strong>
              <span>
                Node.js, Express.js, and REST API development.
              </span>
            </li>

            <li>
              <strong>Supabase</strong>
              <span>
                Backend services and database management.
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
