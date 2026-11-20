
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)

    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header
      className={`premium-header ${scrolled ? 'is-scrolled' : ''}`}
    >
      <div className="container premium-nav-container">
        <a
          href="#home"
          className="premium-brand"
          onClick={() => setOpen(false)}
          aria-label="Go to homepage"
        >
          <span className="premium-brand-mark">M<span>A</span></span>

          <span className="premium-brand-info">
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <button
          type="button"
          className={`premium-menu-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="premium-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="premium-navigation"
          className={`premium-navigation ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="premium-contact-button"
            onClick={() => setOpen(false)}
          >
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
