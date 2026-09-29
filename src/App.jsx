import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import { Skills, Experience, Education, Contact } from './sections/Rest'
export default function App() {
  useEffect(() => { // one calm reveal per section as it enters the viewport
    const els = document.querySelectorAll('.sec .wrap')
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    els.forEach((el) => { el.classList.add('rv'); io.observe(el) }); return () => io.disconnect()
  }, [])
  return (<><a className="skip" href="#about">Skip to content</a><Nav /><main><Hero /><About /><Projects /><Skills /><Experience /><Education /><Contact /></main></>)
}
