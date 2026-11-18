import SectionTitle from '../components/SectionTitle'
import SkillGroup from '../components/SkillGroup'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionTitle
          index="02"
          eyebrow="Skills"
          title="Technologies I work with."
          text="Modern technologies and tools I use to build responsive, reliable, and user-friendly web experiences."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} title={group.title} note={group.note} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
