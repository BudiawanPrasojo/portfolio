import { useEffect, useRef, useState } from 'react'
import { links, nav } from '../data/content'
import { Btn } from './Ui'

export default function Nav() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const bar = useRef(null)

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    const home = document.getElementById('home'); home && io.observe(home)
    return () => io.disconnect()
  }, [])

  // Reading progress and the "stuck" state, throttled to one update per frame.
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight
      setStuck(y > 8)
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])

  // Close the mobile menu with Escape, and when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    const mq = window.matchMedia('(min-width: 861px)')
    const onMq = () => mq.matches && setOpen(false)
    window.addEventListener('keydown', onKey); mq.addEventListener('change', onMq)
    return () => { window.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq) }
  }, [])

  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}${open ? ' is-open' : ''}`}>
      <div className="progress" ref={bar} aria-hidden="true" />
      <div className="wrap nav-in">
        <a href="#home" className="brand" aria-label="Budiawan Prasojo, back to top" onClick={() => setOpen(false)}>
          <span className="mark">BP</span><span className="brand-name">Budiawan Prasojo</span>
        </a>
        <nav id="menu" aria-label="Primary">
          <ul>
            {nav.map((n, i) => {
              const id = n.toLowerCase()
              return (
                <li key={id} style={{ '--i': i }}>
                  <a href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}
                     onClick={() => { setActive(id); setOpen(false) }}>{n}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="nav-actions">
          <Btn kind="outline" size="sm" icon="download" download="Budiawan-Prasojo-CV.pdf" href={links.cv}>Download CV</Btn>
          <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <span className="sr">{open ? 'Close menu' : 'Open menu'}</span><i /><i /><i />
          </button>
        </div>
      </div>
    </header>
  )
}
