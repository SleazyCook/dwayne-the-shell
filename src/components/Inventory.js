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

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}
        
        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}

        <div className="inventory__flex-item">
          <div className="inventory__item-name">Spear</div>
          <div className="inventory__item-number">&nbsp;</div>
        </div> {/* 01 END */}
        
        
      </div>

    </div>
  )
}

export default Inventory