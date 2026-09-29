import { useState } from 'react'
export const isPlaceholder = (u) => !u || u.startsWith('[')
export function Btn({ href, kind = 'ghost', children }) {
  const off = isPlaceholder(href)
  return (
    <a className={`btn ${kind}${off ? ' off' : ''}`} href={off ? undefined : href} role={off ? 'link' : undefined}
       aria-disabled={off || undefined} tabIndex={off ? 0 : undefined}
       target={!off && href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
  )
}
// Renders the image when present; otherwise a neutral schematic frame (never breaks the page).
export function SafeImage({ src, alt, label, className = '' }) {
  const [ok, setOk] = useState(true)
  return ok ? <img className={className} src={src} alt={alt} loading="lazy" onError={() => setOk(false)} />
    : <div className={`ph ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 120 70" aria-hidden="true"><path d="M0 10H120M0 35H120M0 60H120M20 0V70M60 0V70M100 0V70" stroke="currentColor" strokeWidth=".4" opacity=".5"/>
          <path d="M10 55L35 35 60 42 85 20 110 28" fill="none" stroke="var(--amb)" strokeWidth="1"/></svg>
        {label && <span>{label}</span>}</div>
}
export const Tags = ({ items }) => <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>
