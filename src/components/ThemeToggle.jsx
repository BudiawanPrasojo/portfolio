import { useEffect, useState } from 'react'
import { Icon } from './Ui'

const COLORS = { dark: '#0f0f10', light: '#f6f5f2' }

// The initial theme is set by the inline script in index.html (no flash). A choice is saved only when the visitor clicks.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[theme])
  }, [theme])
  const next = theme === 'dark' ? 'light' : 'dark'
  const toggle = () => { setTheme(next); try { localStorage.setItem('theme', next) } catch { /* storage unavailable */ } }
  return (
    <button type="button" className="theme" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
    </button>
  )
}
