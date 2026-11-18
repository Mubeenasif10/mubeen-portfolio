import SectionTitle from '../components/SectionTitle'
import ServiceIcon from '../components/ServiceIcon'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="Services"
          title="Ways I can help with a website."
          text="Each service is scoped to the kind of work I can actually take on."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.id} className="service-card">
              <ServiceIcon id={service.id} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
