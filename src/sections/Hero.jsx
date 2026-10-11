import BlockModel from '../components/BlockModel'
import { Btn, SafeImage, TextLink } from '../components/Ui'
import { links, profile as p } from '../data/content'

export default function Hero() {
  const [first, ...rest] = p.name.split(' ')
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-role seq" style={{ '--i': 0 }}>{p.program} student, {p.school}</p>
          <h1 id="hero-title" className="seq" style={{ '--i': 1 }}><span>{first}</span> <span>{rest.join(' ')}</span></h1>
          <p className="statement seq" style={{ '--i': 2 }}>{p.statement}</p>
          <p className="lede seq" style={{ '--i': 3 }}>{p.support}</p>
          <p className="aim seq" style={{ '--i': 4 }}>{p.aim}</p>
          <div className="cta seq" style={{ '--i': 5 }}>
            <Btn kind="primary" icon="download" download="Budiawan-Prasojo-CV.pdf" href={links.cv}>Download CV</Btn>
            <Btn href="#projects">View projects</Btn>
          </div>
          <p className="hero-links seq" style={{ '--i': 6 }}>
            <TextLink href={links.github}>GitHub</TextLink>
            <TextLink href={links.linkedin}>LinkedIn</TextLink>
            <TextLink href={`mailto:${links.email}`}>Email</TextLink>
          </p>
        </div>

        <figure className="idcard seq" style={{ '--i': 3 }}>
          <div className="portrait">
            <SafeImage src="/profile.jpg" alt={`Portrait of ${p.name}`} label="BP" width="498" height="623" eager />
          </div>
          <dl className="titleblock">
            <div><dt>Candidate</dt><dd>{p.name}</dd></div>
            <div><dt>Based in</dt><dd>{p.location.replace(', Indonesia', '')}</dd></div>
            <div className="wide"><dt>Program</dt><dd>{p.program}, {p.school}</dd></div>
            <div className="wide"><dt>Seeking</dt><dd>{p.seeking}</dd></div>
          </dl>
        </figure>
      </div>

      <div className="wrap">
        <figure className="strip seq" style={{ '--i': 7 }}>
          <div className="strip-plan"><BlockModel /><span className="scan" /></div>
          <figcaption>Illustrative block-model plan view, not project data.</figcaption>
        </figure>
      </div>
    </section>
  )
}
