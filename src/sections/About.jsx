import { direction, profile, pathway } from '../data/content'
export default function About() {
  return (
    <section id="about" className="sec"><div className="wrap">
      <h2>About</h2>
      <div className="about-grid">
        <div className="prose">{profile.about.map((t)=><p key={t}>{t}</p>)}</div>
        <div>
          <h3>Where I'm heading</h3>
          <ol className="dir">{direction.map(([t,d],i)=><li key={t}><span>{String(i+1).padStart(2,'0')}</span><div><b>{t}</b><p>{d}</p></div></li>)}</ol>
          <p className="note">A direction I am building toward, not a job title.</p>
        </div>
      </div>
      <ol className="flow path" aria-label="Career pathway">{pathway.map((x)=><li key={x}>{x}</li>)}</ol>
    </div></section>
  )
}
