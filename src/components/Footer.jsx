import { navLinks, profile } from '../data/profile'
import SocialLinks from './SocialLinks'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-title">{profile.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks items={profile.socials} />
      </div>
      <div className="container footer-bottom">
        <p>© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
