import { useEffect, useState } from 'react'
import { nav } from '../data/content'
export default function Nav() {
  const [active, setActive] = useState('home'); const [open, setOpen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach((n) => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav"><div className="wrap nav-in">
      <a href="#home" className="mark" aria-label="Budiawan Prasojo, home">BP</a>
      <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <nav id="menu" className={open ? 'open' : ''} aria-label="Primary">
        {nav.map((n) => { const id = n.toLowerCase()
          return <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{n}</a> })}
      </nav>
    </div></header>
  )
}
