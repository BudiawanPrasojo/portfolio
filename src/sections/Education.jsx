import { SectionHead } from '../components/Ui'
import { certifications, education } from '../data/content'

const groups = [...new Set(certifications.map((c) => c.group))]

export default function Education() {
  return (
    <section id="education" className="sec">
      <div className="wrap sec-grid">
        <SectionHead title="Education & certifications" />
        <div className="sec-body">
          <ul className="edu">
            {education.map((e) => (
              <li key={e.title} data-reveal>
                <div><b>{e.title}</b><span>{e.sub}</span></div>
                {e.period && <em>{e.period}</em>}
              </li>
            ))}
          </ul>

          {groups.map((g) => (
            <div className="cert-group" key={g} data-reveal>
              <h3>{g}</h3>
              <ul className="certs">
                {certifications.filter((c) => c.group === g).map((c) => (
                  <li key={c.name}>
                    <b>{c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.name}</a> : c.name}</b>
                    {(c.issuer || c.date) && <span>{[c.issuer, c.date].filter(Boolean).join(', ')}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
