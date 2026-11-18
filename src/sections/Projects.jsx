
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          index="04"
          eyebrow="Projects"
          title="Selected work."
          text="Explore a selection of modern, responsive websites and interactive web experiences built with React.js and modern web technologies."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
