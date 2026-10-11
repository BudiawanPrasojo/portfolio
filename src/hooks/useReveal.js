import { useEffect } from 'react'

// Adds `is-in` to every [data-reveal] element the first time it scrolls into view.
// CSS only hides these elements when <html class="js"> is set, so the page stays readable without JavaScript.
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
    }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
