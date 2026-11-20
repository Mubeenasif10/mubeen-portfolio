
import SectionTitle from '../components/SectionTitle'

const expertise = [
  {
    title: 'Frontend Development',
    description:
      'Building modern and interactive web interfaces with React.js, JavaScript, HTML5, and CSS3.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    icon: '</>',
  },
  {
    title: 'Backend Development',
    description:
      'Developing application functionality, server-side features, and API integrations.',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
    icon: '{ }',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Creating flexible and visually consistent layouts for desktop, tablet, and mobile devices.',
    tags: ['Responsive Layouts', 'UI Design', 'CSS3'],
    icon: '◈',
  },
  {
    title: 'Backend & Database Integration',
    description:
      'Connecting web applications with backend services and managing application data.',
    tags: ['Supabase', 'Database', 'Integration'],
    icon: '⌘',
  },
]

export default function About() {
  return (
    <section id="about" className="section premium-about">
      <div className="container">
        <SectionTitle
          index="01"
          eyebrow="Get to Know Me"
          title="More than just writing code."
          text="I combine development skills, thoughtful design, and practical problem-solving to build meaningful web experiences."
        />

        <div className="premium-about-layout">
          <div className="premium-about-main">
            <span className="premium-about-overline">
              A LITTLE ABOUT MYSELF
            </span>

            <h3>
              Turning creative ideas into
              <span> functional digital experiences.</span>
            </h3>

            <p>
              Hello, I'm Muhammad Mubeen Asif, a Full Stack Web Developer
              passionate about creating modern, responsive, and
              user-friendly websites.
            </p>

            <p>
              I enjoy working on the visual and functional sides of web
              development. From designing clean interfaces to building
              interactive features, I focus on making websites useful,
              accessible, and enjoyable to use.
            </p>

            <p>
              My work includes frontend development with HTML5, CSS3,
              JavaScript, and React.js, along with backend technologies
              such as Node.js, Express.js, and REST APIs. I also work
              with Supabase for backend services and database integration.
            </p>

            <p>
              I believe in clean code, thoughtful design, continuous
              improvement, and creating digital experiences that work
              smoothly across different devices.
            </p>

            <div className="premium-about-values">
              <div>
                <span className="premium-value-icon">✳</span>
                <span>Clean & Organized Code</span>
              </div>

              <div>
                <span className="premium-value-icon">✳</span>
                <span>Responsive Experiences</span>
              </div>

              <div>
                <span className="premium-value-icon">✳</span>
                <span>User-Focused Approach</span>
              </div>
            </div>

            <a href="#contact" className="premium-about-link">
              Let's Work Together
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="premium-about-expertise">
            <div className="premium-expertise-heading">
              <div>
                <span>WHAT I DO</span>
                <h3>My Expertise</h3>
              </div>

              <span className="premium-expertise-symbol">✳</span>
            </div>

            <div className="premium-expertise-list">
              {expertise.map((item) => (
                <article className="premium-expertise-card" key={item.title}>
                  <div className="premium-expertise-card-top">
                    <span className="premium-expertise-icon">
                      {item.icon}
                    </span>

                    <span className="premium-expertise-arrow">
                      ↗
                    </span>
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.description}</p>

                  <div className="premium-expertise-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
