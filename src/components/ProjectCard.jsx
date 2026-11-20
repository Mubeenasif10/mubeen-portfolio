
function ProjectLink({ href, children, primary = false }) {
  if (!href) {
    return (
      <span className="project-link is-unavailable" aria-disabled="true">
        {children}
      </span>
    )
  }

  return (
    <a
      className={`project-link ${primary ? 'project-link-primary' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a
        className="project-image-link"
        href={project.liveUrl || '#projects'}
        target={project.liveUrl ? '_blank' : undefined}
        rel={project.liveUrl ? 'noopener noreferrer' : undefined}
        aria-label={`View ${project.name} live demo`}
      >
        <div className="project-image-wrap">
          <img
            src={project.image}
            alt={project.imageAlt}
            width="800"
            height="500"
            loading="lazy"
          />
          <span className="project-image-overlay">
            View Project <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>

      <div className="project-body">
        <div className="project-card-heading">
          <span className="project-category">
            {project.category ||
              (project.id === 'luxecart'
                ? 'E-Commerce'
                : 'Web Development')}
          </span>

          <span className="project-number">
            {project.id === 'luxecart' ? '01' : '02'}
          </span>
        </div>

        <h3>{project.name}</h3>

        <p className="project-description">{project.description}</p>

        <ul className="tech-list" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-actions">
          <ProjectLink href={project.liveUrl} primary>
            Live Demo
          </ProjectLink>

          <ProjectLink href={project.githubUrl}>
            GitHub
          </ProjectLink>
        </div>
      </div>
    </article>
  )
}
