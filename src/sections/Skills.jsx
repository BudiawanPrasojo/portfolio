import { SectionHead } from '../components/Ui'
import { projects, skills } from '../data/content'

const nameOf = (id) => projects.find((p) => p.id === id)?.name

export default function Skills() {
  return (
    <section id="skills" className="sec alt">
      <div className="wrap sec-grid">
        <SectionHead title="Technical skills">Each group links to the projects where I used it.</SectionHead>
        <div className="sec-body">
          <div className="skill-list">
            {skills.map((s, i) => (
              <div className="skill-row" key={s.group} data-reveal style={{ '--i': i % 3 }}>
                <h3>{s.group}</h3>
                <ul className="chips" aria-label={s.group}>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <p className="used"><span>Used in</span>
                  {s.used.map((id) => <a key={id} href={`#${id}`}>{nameOf(id)}</a>)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
