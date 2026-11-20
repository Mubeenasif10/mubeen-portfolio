
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

    setValues((current) => ({
      ...current,
      [name]: value,
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }))
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
        'Supabase is not configured. Please check your environment variables.'
      )
      return
    }

    setStatus('sending')

    const { error } = await supabase
      .from('contact_messages')
      .insert({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })

    if (error) {
      console.error('Supabase error:', error)

      setStatus('error')
      setStatusMessage(
        `Error: ${error.message} | Code: ${error.code || 'N/A'}`
      )
      return
    }

    setValues(emptyForm)
    setStatus('sent')
    setStatusMessage(
      'Your message was saved successfully. Thank you for contacting me!'
    )
  }

  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container">
        <SectionTitle
          index="06"
          eyebrow="Get In Touch"
          title="Let's create something meaningful."
          text="Have a project in mind or want to discuss an opportunity? Send me a message and let's connect."
        />

        <div className="contact-showcase">
          <div className="contact-info-panel">
            <span className="contact-panel-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h3>
              Let's turn your
              <span> ideas into reality.</span>
            </h3>

            <p className="contact-info-description">
              I'm always interested in discussing web development
              projects, creative ideas, and opportunities to build
              something useful.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">@</span>
              <div>
                <span className="contact-detail-label">EMAIL ADDRESS</span>
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer">
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="contact-social-block">
              <span className="contact-detail-label">
                CONNECT WITH ME
              </span>
              <SocialLinks items={profile.socials} />
            </div>

            <div className="contact-availability">
              <span className="contact-availability-dot" />
              <span>Open to meaningful opportunities</span>
            </div>
          </div>

          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span className="contact-panel-eyebrow">
                SEND A MESSAGE
              </span>
              <h3>Tell me about your project.</h3>
              <p>
                Fill out the form below. I'll be happy to hear from you.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-row">
                <Field
                  id="name"
                  label="Your Name"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  autoComplete="name"
                  onChange={updateField}
                />

                <Field
                  id="email"
                  label="Email Address"
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
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about what you have in mind..."
                  value={values.message}
                  onChange={updateField}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />

                {errors.message ? (
                  <p id="message-error" className="field-error">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                className="btn btn-primary contact-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <span aria-hidden="true">↗</span>
              </button>

              <p
                className={`form-status form-status-${status}`}
                role="status"
                aria-live="polite"
              >
                {statusMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  name,
  type = 'text',
  value,
  error,
  autoComplete,
  onChange,
}) {
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
