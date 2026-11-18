const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (name.length < 2) {
    errors.name = 'Enter your name (at least 2 characters).'
  } else if (name.length > 80) {
    errors.name = 'Name must be 80 characters or fewer.'
  }

  if (!email) {
    errors.email = 'Enter your email address.'
  } else if (!emailPattern.test(email) || email.length > 120) {
    errors.email = 'Enter a valid email address.'
  }

  if (subject.length < 2) {
    errors.subject = 'Enter a subject (at least 2 characters).'
  } else if (subject.length > 120) {
    errors.subject = 'Subject must be 120 characters or fewer.'
  }

  if (message.length < 10) {
    errors.message = 'Enter a message (at least 10 characters).'
  } else if (message.length > 2000) {
    errors.message = 'Message must be 2000 characters or fewer.'
  }

  return errors
}
