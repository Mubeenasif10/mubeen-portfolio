
import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/experience'

const details = [
  {
    label: 'FOUNDATION',
    period: '01',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    label: 'FRONTEND',
    period: '02',
    technologies: ['React.js', 'JavaScript', 'Reusable Components'],
  },
  {
    label: 'SELECTED WORK',
    period: '03',
    technologies: ['LuxeCart', 'Maison Table', 'Responsive Design'],
  },
  {
    label: 'BACKEND',
    period: '04',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Supabase'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionTitle
          index="05"
          eyebrow="Experience & Journey"
          title="From learning to building real experiences."
          text="A journey through web development training, frontend engineering, practical projects, and backend technologies."
        />

        <div className="experience-showcase">
          <div className="experience-showcase-top">
            <span>MY DEVELOPMENT JOURNEY</span>
            <span>2026 — PRESENT</span>
          </div>

          <h3>
            Turning technical knowledge into
            <span> meaningful digital work.</span>
          </h3>

          <p>
            I combine structured web development training with hands-on
            project work, focusing on clean interfaces, responsive layouts,
            and functional web applications.
          </p>
        </div>

        <div className="experience-list-heading">
          <div>
            <span className="experience-overline">THE JOURNEY</span>
            <h3>What I've worked on</h3>
          </div>

          <span className="experience-count">
            04 <span>AREAS</span>
          </span>
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => {
            const detail = details[index]

            return (
              <article className="experience-card" key={item.id}>
                <div className="experience-card-top">
                  <span className="experience-card-number">
                    {detail.period}
                  </span>

                  <span className="experience-card-label">
                    {detail.label}
                  </span>
                </div>

                <div className="experience-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <div className="experience-card-footer">
                  {detail.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="experience-bottom-note">
          <span className="experience-note-dot" />
          <p>
            Focused on continuous improvement, practical development,
            and creating better web experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
