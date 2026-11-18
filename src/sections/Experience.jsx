
import SectionTitle from '../components/SectionTitle'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          index="05"
          eyebrow="Experience"
          title="Training & project experience."
          text="My web development training and practical experience building websites and frontend applications."
        />
        <ol className="timeline">
          {experience.map((item, index) => (
            <li key={item.id}>
              <span className="timeline-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
