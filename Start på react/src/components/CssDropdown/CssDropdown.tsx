import './CssDropdown.css'

export default function CssDropdown() {
  return (
    <details className="css-dropdown">
      <summary className="trigger" aria-haspopup="listbox">
        Menu
        <span className="chevron" aria-hidden="true">▾</span>
      </summary>

      <ul className="menu" role="listbox" aria-label="Dropdown menu">
        <li role="option"><a href="#forside">Forside</a></li>
        <li role="option"><a href="#om-os">Om os</a></li>
        <li role="option"><a href="#tjenester">Tjenester</a></li>
        <li role="option"><a href="#blog">Blog</a></li>
        <li role="option"><a href="#kontakt">Kontakt</a></li>
      </ul>
    </details>
  )
}
