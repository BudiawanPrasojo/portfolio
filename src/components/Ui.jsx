import { useState } from 'react'

// A URL is "not available" when it is empty or still a [PLACEHOLDER_*] value.
export const isPlaceholder = (u) => !u || u.startsWith('[')
// GitHub links are stored as clone URLs ending in .git; the web page lives at the same address without the suffix.
export const webUrl = (u) => (u || '').replace(/\.git$/, '')
export const hostOf = (u) => { try { return new URL(u).host } catch { return '' } }

const paths = {
  download: 'M12 3v12m0 0l-5-5m5 5l5-5M5 20h14',
  external: 'M7 17L17 7M9 7h8v8',
  eye: 'M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z',
  close: 'M6 6l12 12M18 6L6 18',
  sun: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4',
  moon: 'M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z',
}
export const Icon = ({ name, size = 16 }) => (
  <svg className="ico" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={paths[name]} />
  </svg>
)

// Renders nothing when the destination is unavailable, so the page never shows a dead button.
export function Btn({ href, kind = 'ghost', size, download, icon, children, ...rest }) {
  if (isPlaceholder(href)) return null
  const external = /^https?:/.test(href)
  const cls = ['btn', kind, size].filter(Boolean).join(' ')
  return (
    <a className={cls} href={webUrl(href)} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
       {...(download ? { download: typeof download === 'string' ? download : true } : {})} {...rest}>
      {icon === 'download' && <Icon name="download" />}
      {children}
      {external && <><Icon name="external" size={14} /><span className="sr">(opens in a new tab)</span></>}
    </a>
  )
}

export const TextLink = ({ href, children }) => {
  if (isPlaceholder(href)) return null
  const external = /^https?:/.test(href)
  return <a className="tlink" href={webUrl(href)} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{children}{external && <span className="sr"> (opens in a new tab)</span>}</a>
}

// Shows the image when it loads; otherwise a neutral grid frame, so a missing file never breaks the layout.
export function SafeImage({ src, alt, label, className = '', width, height, eager = false }) {
  const [ok, setOk] = useState(true)
  if (ok) return <img className={className} src={src} alt={alt} width={width} height={height} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setOk(false)} />
  return (
    <div className={`ph ${className}`} role="img" aria-label={alt}>
      <svg viewBox="0 0 120 70" aria-hidden="true"><path d="M0 10H120M0 35H120M0 60H120M20 0V70M60 0V70M100 0V70" stroke="currentColor" strokeWidth=".4" opacity=".5" />
        <path d="M10 55L35 35 60 42 85 20 110 28" fill="none" stroke="var(--cu)" strokeWidth="1" /></svg>
      {label && <span>{label}</span>}
    </div>
  )
}

export const Tags = ({ items, max }) => {
  const shown = max ? items.slice(0, max) : items
  const rest = items.length - shown.length
  return (
    <ul className="tags" aria-label="Technologies">
      {shown.map((t) => <li key={t}>{t}</li>)}
      {rest > 0 && <li className="more">+{rest} more</li>}
    </ul>
  )
}

export const SectionHead = ({ title, children }) => (
  <div className="sec-head" data-reveal>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>
)
