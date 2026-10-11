import { useEffect, useRef, useState } from 'react'
import { Btn, hostOf, Icon, isPlaceholder, SafeImage, SectionHead, Tags } from '../components/Ui'
import { chain, projects } from '../data/content'

const frameLabel = (p) =>
  p.visual === 'analysis' ? 'Notebook output and workbook results' : !isPlaceholder(p.demo) ? hostOf(p.demo) : 'Project screenshot'

/* ---------- media ---------- */

function Gallery({ p, onOpen }) {
  const all = [p.img, ...(p.images || [])]
  const [i, setI] = useState(0)
  return (
    <div className="frame">
      <div className="frame-bar"><span>{frameLabel(p)}</span></div>
      <div className={`frame-view${onOpen ? ' clickable' : ''}`} onClick={onOpen}>
        <SafeImage key={all[i]} className="shot" src={all[i]} alt={`${p.name} screenshot ${i + 1} of ${all.length}`}
                   label={p.name} width="1365" height="633" />
      </div>
      {all.length > 1 && (
        <div className="thumbs" role="group" aria-label={`${p.name} screenshots`}>
          {all.map((src, k) => (
            <button key={src} className="thumb" aria-current={k === i} aria-label={`Show screenshot ${k + 1} of ${all.length}`}
                    onClick={(e) => { e.stopPropagation(); setI(k) }}>
              <img src={src} alt="" loading="lazy" decoding="async" width="84" height="40" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// For analytics work with no interface: the real notebook figure beside verified result figures.
function AnalysisMedia({ p, onOpen }) {
  return (
    <div className="frame">
      <div className="frame-bar"><span>{frameLabel(p)}</span></div>
      <div className="analysis">
        <div className={`plate${onOpen ? ' clickable' : ''}`} onClick={onOpen}>
          <SafeImage src={p.img} alt="Scatter plot of actual versus predicted profit for the held-out test blocks, from the regression notebook"
                     label={p.name} width="578" height="547" />
        </div>
        <dl className="metrics">
          {p.metrics.map(([v, l]) => <div key={l}><dt>{l}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
      <p className="frame-note">{p.metricsNote}</p>
    </div>
  )
}

const Media = ({ p, onOpen }) => (p.visual === 'analysis' ? <AnalysisMedia p={p} onOpen={onOpen} /> : <Gallery p={p} onOpen={onOpen} />)

/* ---------- shared pieces ---------- */

const Meta = ({ p, flag }) => (
  <p className="proj-meta">
    <span className="cat">{p.category}</span>
    {flag && p.flagship && <span className="flag">Flagship</span>}
    {p.period && <span>{p.period}</span>}
    {p.context && <span>{p.context}</span>}
  </p>
)

const Features = ({ items, limit }) => {
  const shown = limit ? items.slice(0, limit) : items
  return shown.length > 0 ? <ul className="feat">{shown.map((f) => <li key={f}>{f}</li>)}</ul> : null
}

function Links({ p, onDetails, details = true }) {
  const hasDemo = !isPlaceholder(p.demo)
  return (
    <div className="cta">
      <Btn kind="primary" href={p.demo}>Live demo</Btn>
      <Btn kind={hasDemo ? 'ghost' : 'primary'} href={p.code}>GitHub</Btn>
      {details && <button type="button" className="btn quiet" onClick={() => onDetails(p)}><Icon name="eye" />Details</button>}
    </div>
  )
}

/* ---------- TerraOps system model (existing content, kept) ---------- */

function Simulation() {
  const [step, setStep] = useState(-1)
  const timers = useRef([])
  useEffect(() => () => timers.current.forEach(clearTimeout), [])
  const run = () => {
    timers.current.forEach(clearTimeout); setStep(0)
    timers.current = chain.map((_, i) => setTimeout(() => setStep(i), i * 700))
  }
  return (
    <div className="sim">
      <div className="sim-head">
        <h4>Cause and effect simulation</h4>
        <button type="button" className="btn ghost sm" onClick={run}>{step < 0 ? 'Run scenario' : 'Replay'}</button>
      </div>
      <ol aria-live="polite">
        {chain.map(([t, d, k], i) => (
          <li key={t} className={i <= step ? 'lit' : ''}><span className="k">{k}</span><b>{t}</b><small>{d}</small></li>
        ))}
      </ol>
      <p className="note">Simulated chain from the TerraOps prototype.</p>
    </div>
  )
}

function SystemModel() {
  return (
    <div className="proj-extra">
      <div className="ps">
        <div><h4>The problem</h4><p>Industrial operations generate large amounts of data across equipment, sites, environmental conditions, events, and KPIs. Read separately, those signals hide how they affect each other.</p></div>
        <ol className="flow" aria-label="Data flow">{['Data', 'Context', 'Insight', 'Decision'].map((s) => <li key={s}>{s}</li>)}</ol>
      </div>
      <Simulation />
    </div>
  )
}

/* ---------- featured + compact ---------- */

function Featured({ p, onDetails }) {
  return (
    <article className={`proj${p.flagship ? ' flagship' : ''}`} id={p.id} aria-labelledby={`${p.id}-title`} data-reveal>
      <div className="proj-media"><Media p={p} onOpen={() => onDetails(p)} /></div>
      <div className="proj-body">
        <Meta p={p} flag />
        <h3 id={`${p.id}-title`}>{p.name}</h3>
        <p className="sub">{p.sub}</p>
        <p className="desc">{p.desc}</p>
        <Features items={p.features || []} limit={4} />
        {p.tech?.length > 0 && <Tags items={p.tech} max={6} />}
        {p.flagship && p.note && <p className="note">{p.note}</p>}
        <Links p={p} onDetails={onDetails} />
      </div>
      {p.flagship && <SystemModel />}
    </article>
  )
}

function Compact({ p, onDetails }) {
  return (
    <article className="mini" id={p.id} aria-labelledby={`${p.id}-title`} data-reveal>
      <button type="button" className="mini-shot" onClick={() => onDetails(p)} aria-label={`View ${p.name} details`}>
        <SafeImage src={p.img} alt={`${p.name} screenshot`} label={p.name} width="1365" height="700" />
      </button>
      <div className="mini-body">
        <Meta p={p} />
        <h3 id={`${p.id}-title`}>{p.name}</h3>
        <p className="sub">{p.sub}</p>
        <p className="desc">{p.desc}</p>
        {p.tech?.length > 0 && <Tags items={p.tech} max={5} />}
        <Links p={p} onDetails={onDetails} />
      </div>
    </article>
  )
}

/* ---------- details dialog ---------- */

function Details({ p, onClose }) {
  const ref = useRef(null)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const d = ref.current
    if (d && !d.open) d.showModal()
    document.documentElement.classList.add('lock')
    return () => document.documentElement.classList.remove('lock')
  }, [])

  const close = () => {
    if (closing) return
    setClosing(true)
    setTimeout(() => { ref.current?.close(); onClose() }, 180)
  }

  return (
    <dialog ref={ref} className={`pd${closing ? ' closing' : ''}`} aria-labelledby="pd-title"
            onCancel={(e) => { e.preventDefault(); close() }}
            onClick={(e) => { if (e.target === ref.current) close() }}>
      <div className="pd-in">
        <header className="pd-head">
          <div>
            <Meta p={p} flag />
            <h3 id="pd-title">{p.name}</h3>
            <p className="sub">{p.sub}</p>
          </div>
          <button type="button" className="pd-x" onClick={close} aria-label="Close project details"><Icon name="close" size={20} /></button>
        </header>

        <div className="pd-grid">
          <div className="pd-media"><Media p={p} /></div>
          <div className="pd-text">
            <p className="desc">{p.desc}</p>

            {p.features?.length > 0 && <><h4>Key features</h4><Features items={p.features} /></>}

            {p.tables && (
              <>
                <h4>Results from the Excel workbook</h4>
                <div className="tables">
                  {p.tables.map((t) => (
                    <table key={t.title}>
                      <caption>{t.title}</caption>
                      <thead><tr>{t.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                      <tbody>{t.rows.map((r) => <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={c} scope="row">{c}</th> : <td key={c}>{c}</td>))}</tr>)}</tbody>
                    </table>
                  ))}
                </div>
                <p className="note">{p.tablesNote}</p>
              </>
            )}

            {p.note && <p className="note-box">{p.note}</p>}
            {p.next && <><h4>Planned next steps, from the repository README</h4><Features items={p.next} /></>}
            {p.tech?.length > 0 && <><h4>Technologies</h4><Tags items={p.tech} /></>}
            <Links p={p} details={false} />
          </div>
        </div>
      </div>
    </dialog>
  )
}

/* ---------- section ---------- */

export default function Projects() {
  const [open, setOpen] = useState(null)
  const featured = projects.filter((p) => p.tier === 'featured')
  const more = projects.filter((p) => p.tier === 'additional')
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <div className="sec-grid proj-top">
          <SectionHead title="Projects" />
          <p className="prose lead" data-reveal>Depth in operations, data, and industrial systems, with breadth across other kinds of software.</p>
        </div>

        <h3 className="tier" data-reveal>Featured projects</h3>
        {featured.map((p) => <Featured key={p.id} p={p} onDetails={setOpen} />)}

        <h3 className="tier" data-reveal>Other projects</h3>
        <div className="mini-list">{more.map((p) => <Compact key={p.id} p={p} onDetails={setOpen} />)}</div>
      </div>
      {open && <Details p={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
