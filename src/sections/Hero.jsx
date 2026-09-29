import { Btn, SafeImage } from '../components/Ui'
import { links, profile as p, direction } from '../data/content'
const sites = [['Site A','94','ok'],['Site B','81','ok'],['Site C','62','warn'],['Site D','88','ok']]
export default function Hero() {
  return (
    <section id="home" className="hero"><div className="wrap hero-grid">
      <div className="hero-copy">
        <div className="idcard">
          <div className="portrait"><SafeImage src="/profile.jpg" alt={`Portrait of ${p.name}`} label="BP" className="portrait-img" /></div>
          <div className="idmeta"><h1>{p.name}</h1><p>{p.program}</p><p>{p.school}</p><p className="mono">Student since {p.since}</p></div>
        </div>
        <p className="statement">{p.statement}</p>
        <p className="lede">{p.support}</p>
        <ul className="meta" aria-label="Career direction">{direction.map(([t])=><li key={t}>{t}</li>)}</ul>
        <div className="cta"><Btn kind="primary" href="#projects">View Projects</Btn><Btn href={links.github}>GitHub</Btn><Btn href={links.linkedin}>LinkedIn</Btn><Btn href={links.cv}>Download CV</Btn></div>
      </div>
      <figure className="console" aria-label="Conceptual operations interface, not a real system">
        <div className="console-bar"><i/><i/><i/><span>Concept interface inspired by TerraOps</span></div>
        <div className="console-body">
          <svg className="map" viewBox="0 0 300 190" aria-hidden="true">
            <defs><pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#26303a" strokeWidth=".6"/></pattern></defs>
            <rect width="300" height="190" fill="url(#g)"/>
            <path d="M40 130L110 70 190 100 250 40M110 70L120 150 190 100" stroke="#3a4956" fill="none" strokeWidth="1.2"/>
            {[[40,130,'#5fb3b3'],[110,70,'#5fb3b3'],[190,100,'#e3a12f'],[250,40,'#5fb3b3'],[120,150,'#5fb3b3']].map(([x,y,c],i)=><circle key={i} cx={x} cy={y} r="6" fill={c} stroke="#0d1116" strokeWidth="2"/>)}
            <circle cx="190" cy="100" r="18" fill="none" stroke="#e3a12f" strokeWidth="1" strokeDasharray="3 3"/>
          </svg>
          <ul className="sites">{sites.map(([n,v,s])=><li key={n} className={s}><span>{n}</span><b>{v}%</b><em>{s==='ok'?'Nominal':'Weather risk'}</em></li>)}</ul>
        </div>
        <figcaption><span>Data</span><span>Context</span><span>Insight</span><span>Decision</span></figcaption>
      </figure>
    </div></section>
  )
}
