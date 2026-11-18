function ProjectLink({ href, children }) {
  if (!href) {
    return (
      <span className="btn btn-ghost is-unavailable" aria-disabled="true">
        {children}
        <span className="sr-only">, link not added yet</span>
      </span>
    )
  }

  return (
    <a className="btn btn-ghost" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.imageAlt} width="800" height="500" />
      <div className="project-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tech-list" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          <ProjectLink href={project.liveUrl}>Live Demo</ProjectLink>
          <ProjectLink href={project.githubUrl}>GitHub</ProjectLink>
        </div>
      </div>
    </article>
  )
}
