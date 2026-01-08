import { useMemo, useState, useEffect, useRef } from 'react'
import './dropdown.css'

type LinkItem = { href: string; label: string }

const ALL_LINKS: LinkItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
]

export function Dropdown() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Close on outside click and Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const links = useMemo(() => {
    const key = 'dropdown-links-v2'
    try {
      const saved = sessionStorage.getItem(key)
      if (saved) {
        const parsed = JSON.parse(saved) as LinkItem[]
        if (Array.isArray(parsed) && parsed.length === 5) return parsed
      }
    } catch {}
    sessionStorage.setItem(key, JSON.stringify(ALL_LINKS))
    return ALL_LINKS
  }, [])

  return (
    <nav className="dropdown" aria-label="Menu">
      <div className="dropdown__inner" ref={rootRef}>
        <button
          className="dropdown__toggle"
          aria-expanded={open}
          aria-controls="dropdown-menu"
          onClick={() => setOpen(o => !o)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(o => !o) }
          }}
        >
          Menu
        </button>

        <ul id="dropdown-menu" className={`dropdown__links ${open ? 'is-open' : ''}`} role="menu">
          {links.map(l => (
            <li key={l.href} role="none">
              <a role="menuitem" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
