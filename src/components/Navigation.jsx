import { personalInfo } from '../data/portfolio'

const NAV_ITEMS = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education',  label: 'Education' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'interests',  label: 'Interests' },
]

export default function Navigation({ activeSection, navOpen, onToggleNav, onNavClick }) {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      {/* ── Mobile top bar ── */}
      <div className="sidebar-mobile-header">
        <button
          className="mobile-brand"
          onClick={() => onNavClick('about')}
          aria-label="Scroll to top"
        >
          <img className="mobile-brand-img" src="/img/profile.png" alt="Dev Patel" />
          <span className="mobile-brand-name">
            {personalInfo.name.first} {personalInfo.name.last}
          </span>
        </button>
        <button
          className="nav-toggle"
          onClick={onToggleNav}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Desktop profile block ── */}
      <div className="sidebar-profile">
        <button
          className="sidebar-profile-btn"
          onClick={() => onNavClick('about')}
          aria-label="Scroll to top"
        >
          <img className="profile-img" src="/img/profile.png" alt="Dev Patel" />
        </button>
      </div>

      {/* ── Nav links ── */}
      <div className={`nav-menu${navOpen ? ' nav-menu--open' : ''}`}>
        <ul className="nav-list" role="list">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link${activeSection === id ? ' nav-link--active' : ''}`}
                onClick={() => onNavClick(id)}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
