import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [navClicked, setNavClicked] = useState(false);
  const [navClass, setNavClass] = useState("navigation");

  const closeNav = () => {
    if (!navClicked) {
      setNavClass("navigation u-hidden")
    } else {
      setNavClass("navigation")
    }
  }

  return (
    <div className={navClass}>
      <nav className="navigation__container">

        <Link onClick={closeNav} className="navigation__link" data-text="HOME" to="/">Home</Link>

        <Link onClick={closeNav} className="navigation__link" data-text="JOURNAL" to="/journal">Journal</Link>

        <Link onClick={closeNav} className="navigation__link" data-text="INVENTORY" to="/inventory">Inventory</Link>

        <Link onClick={closeNav} className="navigation__link" data-text="ARTWORK" to="/artwork">Artwork</Link>

        {/* <a onClick={closeNav} className="navigation__link" data-text="HANDOUTS" href="#">Handouts</a> */}
      </nav>
    </div>
  )
}

export default Navigation