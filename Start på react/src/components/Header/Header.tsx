import { NavBar } from '../NavBar/NavBar'
import './header.css'
import { Dropdown } from '../Dropdown/Dropdown'

export const Header = () => {
  return (
    <header className="site-header">
      <div className="header__inner">
        <NavBar />
        <Dropdown />
      </div>
    </header>
  )
}
