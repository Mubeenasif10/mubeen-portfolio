
import SectionTitle from '../components/SectionTitle'
import ServiceIcon from '../components/ServiceIcon'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionTitle
          index="03"
          eyebrow="What I Offer"
          title="Thoughtful solutions for modern websites."
          text="From responsive interfaces to functional web experiences, I focus on building websites that look great and work smoothly."
        />

        <div className="services-intro">
          <div>
            <span className="services-intro-label">
              MY SERVICES
            </span>

            <h3>
              Good design meets
              <span> practical development.</span>
            </h3>
          </div>

          <p>
            Every project starts with understanding its purpose.
            I focus on clean design, reliable functionality, and
            a smooth experience across devices.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={service.id} className="service-card">
              <div className="service-card-top">
                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="service-icon-wrap">
                  <ServiceIcon id={service.id} />
                </div>
              </div>

              <div className="service-card-content">
                <span className="service-card-eyebrow">
                  SERVICE {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-card-bottom">
                <span>Explore possibilities</span>
                <span className="service-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="services-bottom">
          <span className="services-bottom-line" />
          <p>
            Have a project in mind? Let's discuss how I can help
            bring it to life.
          </p>
          <a href="#contact">
            Discuss a Project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
