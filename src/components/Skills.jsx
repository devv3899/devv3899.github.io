import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>

        <div className="skills-cats">
          {skills.categories.map((cat, i) => (
            <div key={i}>
              <h4 className="skill-cat-label">{cat.label}</h4>
              <div className="skill-badges">
                {cat.items.map((item, j) => (
                  <span key={j} className="skill-badge">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div className="skill-icons-grid">
          {skills.icons.map(({ cls, label }, i) => (
            <i
              key={i}
              className={`${cls} skill-icon-item`}
              title={label}
              aria-label={label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
