import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        {education.map((edu, i) => (
          <article key={i} className="edu-card">
            <div className="edu-body">
              <h3 className="edu-institution">{edu.institution}</h3>
              <p className="edu-degree">{edu.degree}</p>
              <p className="edu-period">{edu.period}</p>
            </div>
            {edu.logo && (
              <img src={edu.logo} alt={edu.logoAlt} className="edu-logo" />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
