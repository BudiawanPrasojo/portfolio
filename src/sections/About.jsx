import { SectionHead } from '../components/Ui'
import { approach, direction, pathway, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap sec-grid">
        <SectionHead title="About" />
        <div className="sec-body">
          <div className="prose" data-reveal>{profile.about.map((t) => <p key={t}>{t}</p>)}</div>

          <h3 className="sub-h" data-reveal>Where I'm heading</h3>
          <ul className="dir">
            {direction.map(([t, d], i) => (
              <li key={t} data-reveal style={{ '--i': i }}><b>{t}</b><p>{d}</p></li>
            ))}
          </ul>
          <p className="note" data-reveal>A direction I am building toward, not a job title.</p>

          <ol className="path" aria-label="Career pathway" data-reveal>
            {pathway.map((x) => <li key={x}>{x}</li>)}
          </ol>

          <h3 className="sub-h how" data-reveal>How I build</h3>
          <p className="prose" data-reveal>I am interested in more than the interface: how data enters a system, how it is processed, how business logic is applied, how operational state changes, how insights are generated, and how software can support decisions.</p>
          <ol className="steps">
            {approach.map(([a, b], i) => (
              <li key={a} data-reveal style={{ '--i': i % 3 }}><b>{a}</b><span>{b}</span></li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
