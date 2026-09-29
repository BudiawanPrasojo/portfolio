import { useState } from 'react'
import { Btn, SafeImage, Tags } from '../components/Ui'
import { projects, chain, approach } from '../data/content'
function Simulation() {
  const [step, setStep] = useState(-1)
  const run = () => { setStep(0); chain.forEach((_, i) => setTimeout(() => setStep(i), i * 700)) }
  return (
    <div className="sim">
      <div className="sim-head"><h4>Cause &amp; effect simulation</h4><button className="btn ghost" onClick={run}>{step < 0 ? 'Run scenario' : 'Replay'}</button></div>
      <ol>{chain.map(([t,d,k],i)=><li key={t} className={i<=step?'lit':''}><span className="k">{k}</span><b>{t}</b><small>{d}</small></li>)}</ol>
      <p className="note">Simulated chain from the TerraOps prototype.</p>
    </div>
  )
}
const Links = ({ p }) => <div className="cta"><Btn kind="primary" href={p.demo}>Live Demo</Btn><Btn href={p.code}>GitHub</Btn></div>
const Feat = ({ p }) => p.features?.length > 0 && <div className="featl"><h4>Key features</h4><ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
const Gallery = ({ p, featured = false }) => p.images?.length > 0 && <div className={`gallery ${featured ? 'gallery-featured' : ''}`}>{p.images.map((src, i) => <SafeImage key={src} src={src} alt={`${p.name} screenshot ${i + 2}`} label={p.name} className="gallery-shot" />)}</div>
const Cat = ({ p }) => <span className="cat">{p.category}</span>
function Card({ p, size }) {
  return (
    <article className={`card ${size}`}>
      <SafeImage src={p.img} alt={`${p.name} screenshot`} label={p.name} className="shot" />
      <Gallery p={p} />
      <div className="card-b"><p className="flag"><Cat p={p} /></p><h3>{p.name}</h3><p className="sub">{p.sub}</p><p>{p.desc}</p><Feat p={p} />
        {p.tech.length > 0 && <Tags items={p.tech} />}<Links p={p} /></div>
    </article>
  )
}
const Tier = ({ children }) => <h3 className="tier">{children}</h3>
export default function Projects() {
  const by = (t) => projects.filter((p) => p.tier === t)
  const t = by('featured')[0]
  return (
    <section id="projects" className="sec"><div className="wrap">
      <h2>Projects</h2>
      <p className="prose lead-in">Depth in operations, data, and industrial systems, with breadth across other kinds of software.</p>
      <Tier>Featured projects</Tier>
      <article className="feature">
        <div className="feature-top"><p className="flag">Flagship project<Cat p={t} /></p><h3>{t.name}</h3><p className="sub">{t.sub}</p></div>
        <SafeImage src={t.img} alt="TerraOps dashboard screenshot" label="TerraOps" className="shot big" />
        <Gallery p={t} featured />
        <div className="ps">
          <div><h4>The problem</h4><p>Industrial operations generate large amounts of data across equipment, sites, environmental conditions, events, and KPIs. Read separately, those signals hide how they affect each other.</p></div>
          <div><h4>The approach</h4><p>{t.desc}</p></div>
        </div>
        <ol className="flow" aria-label="Data flow">{['Data','Context','Insight','Decision'].map(s=><li key={s}>{s}</li>)}</ol>
        <Simulation />
        <Feat p={t} />
        <Tags items={t.tech} />
        {t.note && <p className="note">{t.note}</p>}
        <Links p={t} />
      </article>
      <div className="two">{by('selected').map((p) => <Card key={p.id} p={p} size="medium" />)}</div>
      <Tier>Other projects</Tier>
      <div className="two">{by('additional').map((p) => (
        <article className="card mini" key={p.id}>
          <SafeImage src={p.img} alt={`${p.name} screenshot`} label={p.name} className="shot" />
          <Gallery p={p} />
          <div className="card-b"><p className="flag"><Cat p={p} /></p><h3>{p.name}</h3><p className="sub">{p.sub}</p><p>{p.desc}</p>
            {p.tech.length > 0 && <Tags items={p.tech} />}<Links p={p} /></div>
        </article>))}</div>
      <div className="approach">
        <h3>How I build</h3>
        <p className="prose">I am interested in more than the interface: how data enters a system, how it is processed, how business logic is applied, how operational state changes, how insights are generated, and how software can support decisions.</p>
        <ol className="steps">{approach.map(([a,b])=><li key={a}><b>{a}</b><span>{b}</span></li>)}</ol>
      </div>
    </div></section>
  )
}
