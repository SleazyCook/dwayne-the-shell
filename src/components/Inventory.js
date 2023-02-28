import React from 'react'
import { Link } from 'react-router-dom'

function Inventory() {
  return (
    <div className="inventory">

      <h2 className="heading-secondary"><Link to="/navigate">Inventory</Link></h2>

      <h3 className="heading-tertiary">Equipment</h3>

      <div className="inventory__flex-box">

        <div className="inventory__flex-item inventory__flex-item--spear">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item inventory__flex-item--shield">
          <div className="inventory__item-name">Shield
          </div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 02 END */}

        <div className="inventory__flex-item inventory__flex-item--mace">
          <div className="inventory__item-name">Mace
          </div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 03 END */}

        <div className="inventory__flex-item inventory__flex-item--longbow">
          <div className="inventory__item-name">Longbow
          </div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 04 END */}

        <div className="inventory__flex-item inventory__flex-item--arrow">
          <div className="inventory__item-name">Arrows
          </div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 05 END */}

        <div className="inventory__flex-item inventory__flex-item--scale">
          <div className="inventory__item-name">Scale
          </div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 06 END */}

        <div className="inventory__flex-item inventory__flex-item--tinker">
          <div className="inventory__item-name">Tinkerer's Tools</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 07 END */}

      </div>  {/* Flexbox End */}

    </div>
  )
}

export default Inventory