import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="section-content">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((job, i) => (
            <article key={i} className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <div className="timeline-company">{job.company}</div>
                </div>
                <span className="timeline-period">{job.period}</span>
              </div>
              <ul className="timeline-bullets">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
