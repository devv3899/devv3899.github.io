import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={i} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <p className="project-desc">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
