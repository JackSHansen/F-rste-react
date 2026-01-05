import { useMemo, useState } from 'react'
import './dropdown.css'

type LinkItem = { href: string; label: string }

// kun 5 links
const ALL_LINKS: LinkItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' }
]

export function Dropdown() {
  const [open, setOpen] = useState(false)

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
    <nav className="dropdown" aria-label="Primary">
      <div className="dropdown__inner">
        <div className="dropdown__brand">Menu</div>
        <button
          className="dropdown__toggle"
          aria-expanded={open}
          aria-controls="dropdown-menu"
          onClick={() => setOpen(o => !o)}
        >
          {open ? 'Luk' : 'Menu'}
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
