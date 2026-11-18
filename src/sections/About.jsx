
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          index="01"
          eyebrow="About"
          title="Creating modern digital experiences."
          text="I am a Full Stack Web Developer focused on building modern, responsive, and user-friendly websites."
        />

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am Muhammad Mubeen Asif, a Full Stack Web Developer passionate
              about creating clean, functional, and visually appealing websites.
            </p>

            <p>
              My frontend development skills include HTML5, CSS3, JavaScript,
              and React.js. I build responsive interfaces with reusable
              components and user-friendly layouts.
            </p>

            <p>
              My backend technologies include Node.js, Express.js, and REST APIs.
              I use Supabase as my backend and database platform for web projects.
            </p>

            <p>
              I enjoy transforming ideas into functional websites, developing
              creative solutions, and delivering smooth experiences across
              desktop, tablet, and mobile devices.
            </p>
          </div>

          <ul className="about-points">
            <li>
              <strong>Frontend Development</strong>
              <span>Modern interfaces built with HTML, CSS, JavaScript, and React.</span>
            </li>

            <li>
              <strong>Backend Development</strong>
              <span>Web application functionality using Node.js, Express.js, and REST APIs.</span>
            </li>

            <li>
              <strong>Responsive Web Design</strong>
              <span>Clean layouts designed for desktop, laptop, tablet, and mobile.</span>
            </li>

            <li>
              <strong>Database & Backend Platform</strong>
              <span>Supabase integration for backend services and data management.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
