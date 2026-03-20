import { interests } from '../data/portfolio'

export default function Interests() {
  return (
    <section id="interests" className="section section--alt">
      <div className="section-content">
        <h2 className="section-title">Interests</h2>
        <div className="interests-body">
          {interests.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
