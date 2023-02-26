import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [navClicked, setNavClicked] = useState(false);
  const [navClass, setNavClass] = useState("navigation u-hidden");

  return (
    <div className="navigation">
      <nav className="navigation__container">

        <Link className="navigation__link" data-text="HOME" to="/">Home</Link>

        <Link className="navigation__link" data-text="JOURNAL" to="/journal">Journal</Link>

        <a className="navigation__link" data-text="INVENTORY" href="#">Inventory</a>

        <a className="navigation__link" data-text="ARTWORK" href="#">Artwork</a>

        <a className="navigation__link" data-text="HANDOUTS" href="#">Handouts</a>
      </nav>
    </div>
  )
}

export default Navigation