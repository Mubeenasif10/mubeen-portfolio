
export const profile = {
  name: 'Muhammad Mubeen Asif',
  title: 'Full Stack Web Developer',
  headline: 'Building Modern, Responsive & User-Friendly Web Experiences.',
  introduction:
    'I build modern, responsive websites and interactive web experiences using frontend and backend technologies.',

  email: 'mubeenasif1708@gmail.com',

  socials: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/Mubeenasif10',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mubeenasif10/',
    },
    {
      id: 'fiverr',
      label: 'Fiverr',
      url: 'https://www.fiverr.com/mubeenasif24',
    },
    {
      id: 'email',
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mubeenasif1708@gmail.com',
    },
  ],
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export function getSocialUrl(item) {
  if (item.url) return item.url
  if (item.id === 'email' && profile.email) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`
  }
  return ''
}
