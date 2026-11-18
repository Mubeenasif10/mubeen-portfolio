import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import SocialLinks from '../components/SocialLinks'
import { profile } from '../data/profile'
import { isSupabaseConfigured, supabase } from '../lib/supabase'
import { validateContact } from '../lib/validateContact'

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    setStatusMessage('')

    if (Object.keys(nextErrors).length > 0) {
      setStatus('invalid')
      return
    }

    if (!isSupabaseConfigured || !supabase) {
      setStatus('unconfigured')
      setStatusMessage(
        'The form is valid, but Supabase is not configured, so the message was not saved. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then create the contact_messages table.',
      )
      return
    }

    setStatus('sending')

    const { error } = await supabase.from('contact_messages').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    })

    if (error) {
      setStatus('error')
      setStatusMessage(
        'The message could not be saved. Check the Supabase table, Row Level Security policy, and anon key, then try again.',
      )
      return
    }

    setValues(emptyForm)
    setStatus('sent')
    setStatusMessage('Your message was saved. I will read it from the Supabase contact_messages table.')
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle
          index="06"
          eyebrow="Contact"
          title="Start a conversation."
          text="Send a message about a website, a fix, or a project you want to discuss."
        />
        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <Field
                id="name"
                label="Name"
                name="name"
                value={values.name}
                error={errors.name}
                autoComplete="name"
                onChange={updateField}
              />
              <Field
                id="email"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={updateField}
              />
            </div>
            <Field
              id="subject"
              label="Subject"
              name="subject"
              value={values.subject}
              error={errors.subject}
              autoComplete="off"
              onChange={updateField}
            />
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={values.message}
                onChange={updateField}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="field-error">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p
              className={`form-status form-status-${status}`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          </form>
          <aside className="contact-aside">
            <h3>Direct links</h3>
            <p>
              {profile.email
                ? profile.email
                : 'Add your email in src/data/profile.js to show it here.'}
            </p>
            <SocialLinks items={profile.socials} />
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field({ id, label, name, type = 'text', value, error, autoComplete, onChange }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}
