
import { navLinks, profile } from '../data/profile'
import SocialLinks from './SocialLinks'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer premium-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-area">
            <a href="#home" className="footer-brand">
              <span className="footer-brand-mark">
                M<span>A</span>
              </span>

              <span className="footer-brand-info">
                <strong>{profile.name}</strong>
                <small>{profile.title}</small>
              </span>
            </a>

            <p className="footer-description">
              Creating modern, responsive, and user-friendly web experiences
              through thoughtful design and practical development.
            </p>

            <div className="footer-social-area">
              <span className="footer-small-heading">CONNECT WITH ME</span>
              <SocialLinks items={profile.socials} />
            </div>
          </div>

          <div className="footer-navigation-area">
            <div className="footer-column">
              <span className="footer-small-heading">EXPLORE</span>

              <h3>Quick Links</h3>

              <nav aria-label="Footer navigation">
                <ul className="footer-links">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>
                        <span>{link.label}</span>
                        <span className="footer-link-arrow">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="footer-contact-card">
              <span className="footer-contact-icon">✳</span>

              <span className="footer-small-heading">
                HAVE A PROJECT IN MIND?
              </span>

              <h3>
                Let's create something
                <span> meaningful.</span>
              </h3>

              <p>
                Have an idea or project? I'd be happy to hear about it.
              </p>

              <a href="#contact" className="footer-contact-link">
                Get in Touch
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>

          <a href="#home" className="footer-back-top">
            Back to Top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
