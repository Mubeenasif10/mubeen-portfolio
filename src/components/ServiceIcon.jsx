const icons = {
  frontend: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M8 8.5 4.5 12 8 15.5M16 8.5 19.5 12 16 15.5M13.5 6l-3 12"
      />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M3.5 8.5h17" />
    </svg>
  ),
  fullstack: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M12 4.5 19 8v8l-7 3.5L5 16V8l7-3.5Z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 12.2 19 8M12 12.2 5 8M12 12.2V19.5" />
    </svg>
  ),
  responsive: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="12" height="9" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="9" width="7" height="10" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  fixes: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        d="M14.5 6.5a3.2 3.2 0 0 0-4.4 4.4L5 16.1V19h2.9l5.1-5.1a3.2 3.2 0 0 0 4.4-4.4l-2.2 2.2-2.1-2.1 2.2-2.1Z"
      />
    </svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5" />
    </svg>
  ),
}

export default function ServiceIcon({ id }) {
  return <span className="service-icon">{icons[id]}</span>
}
