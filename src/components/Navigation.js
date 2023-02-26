import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation__container">
        <Link className="navigation__link" data-text="HOME" to="/">Home</Link>
        <Link className="navigation__link" data-text="JOURNALS" to="/">Journals</Link>
        <a className="navigation__link" data-text="INVENTORY" href="#">Inventory</a>
        <a className="navigation__link" data-text="ARTWORK" href="#">Artwork</a>
        <a className="navigation__link" data-text="HANDOUTS" href="#">Handouts</a>
      </nav>
    </div>
  )
}

export default Navigation