import { Btn, Icon } from '../components/Ui'
import { links, profile } from '../data/content'

const handle = (u) => u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export default function Contact() {
  return (
    <section id="contact" className="sec contact alt">
      <div className="wrap">
        <h2 className="big" data-reveal>Let's connect</h2>
        <p className="prose lead" data-reveal>{profile.connect}</p>

        <div className="contact-grid">
          <ul className="contact-list" data-reveal>
            <li><span>Email</span><a href={`mailto:${links.email}`}>{links.email}</a></li>
            <li><span>LinkedIn</span><a href={links.linkedin} target="_blank" rel="noreferrer">{handle(links.linkedin)}<span className="sr"> (opens in a new tab)</span></a></li>
            <li><span>GitHub</span><a href={links.github} target="_blank" rel="noreferrer">{handle(links.github)}<span className="sr"> (opens in a new tab)</span></a></li>
            <li><span>Location</span><p>{profile.location}</p></li>
          </ul>

          <aside className="resume" aria-labelledby="resume-title" data-reveal style={{ '--i': 1 }}>
            <h3 id="resume-title">Resume</h3>
            <p>Two-page PDF with education, technical skills, projects, experience, and certifications.</p>
            <p className="seeking"><span>Looking for</span>{profile.seeking}</p>
            <div className="cta">
              <Btn kind="primary" icon="download" download="Budiawan-Prasojo-CV.pdf" href={links.cv}>Download CV</Btn>
              <a className="btn ghost" href={links.cv} target="_blank" rel="noreferrer"><Icon name="eye" />View in browser<span className="sr"> (opens in a new tab)</span></a>
            </div>
          </aside>
        </div>

        <p className="foot">
          <span>© 2026 {profile.name}</span>
          <a href="#home">Back to top</a>
        </p>
      </div>
    </section>
  )
}
