
import { getSocialUrl } from '../data/profile'

function Icon({ id }) {
  if (id === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    )
  }

  if (id === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.5 9H4V20h2.5V9ZM5.25 4A1.75 1.75 0 1 0 5.26 7.5 1.75 1.75 0 0 0 5.25 4ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.72-1.97 1.41-.1.25-.13.6-.13.95V20H11V9h2.4v1.51c.36-.55 1.22-1.66 3.07-1.66 2.24 0 3.53 1.46 3.53 4.6V20Z"
        />
      </svg>
    )
  }

  if (id === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.42 4.49c.23.16.53.16.76 0L18.8 6.5H5.2Zm13.55 1.72-5.9 4.12a2.25 2.25 0 0 1-2.5 0L4.45 8.22v9.03c0 .69.56 1.25 1.3 1.25h12.5c.74 0 1.25-.56 1.25-1.25V8.22Z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="currentColor"
      >
        F
      </text>
    </svg>
  )
}

export default function SocialLinks({ items, className = '' }) {
  return (
    <ul className={`social-list ${className}`.trim()}>
      {items.map((item) => {
        const href = getSocialUrl(item)

        const content = (
          <>
            <Icon id={item.id} />
            <span>{item.label}</span>
          </>
        )

        return (
          <li key={item.id}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <span className="social-pending">
                {content}
                <small>Not added</small>
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
