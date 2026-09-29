import { Btn } from '../components/Ui'
import { skills, experience, links, education, certifications, profile } from '../data/content'
export const Skills = () => (
  <section id="skills" className="sec"><div className="wrap"><h2>Skills</h2>
    <div className="skills">{Object.entries(skills).map(([k,v])=><div key={k}><h3>{k}</h3><ul>{v.map(s=><li key={s}>{s}</li>)}</ul></div>)}</div></div></section>)
export const Experience = () => (
  <section id="experience" className="sec"><div className="wrap"><h2>Experience &amp; activities</h2>
    <p className="prose">Event operations, coordination, and technical support roles alongside my studies.</p>
    <ul className="tl">{experience.map(g=><li key={g.org}><b>{g.org}</b>{g.period && <em>{g.period}</em>}{g.summary && <span>{g.summary}</span>}
      {g.roles.length > 0 && <div className="roles">{g.roles.map(r=><p key={r.title}>{r.title}{r.detail && <small>{r.detail}</small>}</p>)}</div>}</li>)}</ul></div></section>)
export const Education = () => (
  <section id="education" className="sec"><div className="wrap"><h2>Education</h2>
    <ul className="tl">{education.map(e=><li key={e.title}><b>{e.title}</b><span>{e.sub}</span><em>{e.period}</em></li>)}</ul>
    <h3>Certifications &amp; learning</h3>
    <ul className="certs">{certifications.map(c=><li key={c.name}><b>{c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.name}</a> : c.name}</b>
      {(c.issuer || c.date) && <span>{[c.issuer, c.date].filter(Boolean).join(', ')}</span>}{c.skills && <small>{c.skills}</small>}</li>)}</ul></div></section>)
export const Contact = () => (
  <section id="contact" className="sec contact"><div className="wrap">
    <h2>Let's connect</h2><p className="prose big">{profile.connect}</p>
    <div className="cta"><Btn kind="primary" href={links.linkedin}>LinkedIn</Btn><Btn href={links.github}>GitHub</Btn>
      <Btn href={links.email.startsWith('[') ? links.email : `mailto:${links.email}`}>Email</Btn><Btn href={links.cv}>Download CV</Btn></div>
    <p className="note">© 2026 {profile.name}</p></div></section>)
