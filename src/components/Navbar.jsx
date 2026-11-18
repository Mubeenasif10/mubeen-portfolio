import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="container nav-bar">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            MA
          </span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>{profile.title}</small>
          </span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  )
}
