import React from 'react'
import { Link } from 'react-router-dom'

function Artwork() {
  return (
    <div className="artwork">

      <h2 className="heading-secondary heading-secondary--artwork"><Link to="/navigate">Artwork</Link></h2>

      <h3 className="heading-tertiary">Character</h3>

      <div className="artwork__flex-box">

        <div className="artwork__flex-item artwork__flex-item--dwayne-03">&nbsp;</div>

        <div className="artwork__flex-item artwork__flex-item--dwayne-01">&nbsp;</div>

        <div className="artwork__flex-item artwork__flex-item--dwayne-02">&nbsp;</div>

        <div className="artwork__flex-item artwork__flex-item--dwayne-04">&nbsp;</div>

        
        </div>{/* Flexbox End */}
      
    </div>
  )
}

export default Artwork