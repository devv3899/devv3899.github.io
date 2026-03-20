import { personalInfo } from '../data/portfolio'

const ICON_MAP = {
  linkedin: 'fab fa-linkedin-in',
  github:   'fab fa-github',
  bitbucket:'fab fa-bitbucket',
  twitter:  'fab fa-twitter',
  facebook: 'fab fa-facebook-f',
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <h1 className="about-name">
          {personalInfo.name.first}{' '}
          <span className="text-accent">{personalInfo.name.last}</span>
        </h1>

        <p className="about-meta">
          <span>{personalInfo.location}</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <a href={`tel:${personalInfo.phone.replace(/\D/g, '')}`} className="link-subtle">
            {personalInfo.phone}
          </a>
          <span className="meta-sep" aria-hidden="true">·</span>
          <a href={`mailto:${personalInfo.email}`} className="link-subtle">
            {personalInfo.email}
          </a>
        </p>

        <div className="divider" />

        <div className="about-bio">
          {personalInfo.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="divider" />

        <div className="social-row">
          {personalInfo.social.map(({ label, icon, url }) => (
            <a
              key={label}
              href={url}
              className="social-icon"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={ICON_MAP[icon]} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className="divider" />

        <a
          href={personalInfo.resume}
          className="btn btn-primary"
          download
        >
          <i className="fas fa-download" aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </section>
  )
}
