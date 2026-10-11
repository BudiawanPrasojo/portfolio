import { SectionHead } from '../components/Ui'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="sec alt">
      <div className="wrap sec-grid">
        <SectionHead title="Experience & activities">Event operations, coordination, and technical support roles alongside my studies.</SectionHead>
        <div className="sec-body">
          {experience.map((g) => (
            <div className="org" key={g.org} data-reveal>
              <div className="org-head"><h3>{g.org}</h3>{g.summary && <p>{g.summary}</p>}</div>
              <ul className="roles">
                {g.roles.map((r) => (
                  <li key={r.title}>
                    <div className="role-when">
                      {r.period && <span>{r.period}</span>}
                      {r.type && <small>{r.type}</small>}
                    </div>
                    <div className="role-what">
                      <b>{r.title}</b>
                      {r.detail && <p>{r.detail}</p>}
                    </div>
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
