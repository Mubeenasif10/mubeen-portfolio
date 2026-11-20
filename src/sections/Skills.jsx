
import SectionTitle from '../components/SectionTitle'
import SkillGroup from '../components/SkillGroup'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="My Expertise"
          title="Technologies I work with."
          text="A collection of technologies and tools I use to create modern, responsive, and functional web experiences."
        />

        <div className="skills-intro">
          <p>
            From designing user interfaces to developing backend
            functionality, I work across different areas of web development
            to bring ideas to life.
          </p>

          <span className="skills-intro-label">
            DEVELOPMENT TOOLKIT
          </span>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.id}>
              <div className="skill-card-heading">
                <span className="skill-card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="skill-card-line" />
              </div>

              <SkillGroup
                title={group.title}
                note={group.note}
                items={group.items}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
