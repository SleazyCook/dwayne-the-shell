import React from 'react'
import { Link } from 'react-router-dom'

function Journal() {
  return (
    <div className="journal">

      <h2 className="heading-secondary"><Link to="/navigate">Journal</Link><span></span></h2>

      <div className="journal__main">

        <div className="journal-card journal-card--1">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
              Introduction</span>
            <span className="journal-card__text-box--sub">
              11/06/2022</span>
          </div>
        </div> {/* 01 End */}

        <div className="journal-card journal-card--2">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
              Strange Locket</span>
            <span className="journal-card__text-box--sub">
              12/03/2022</span>
          </div>
        </div> {/* 02 End */}

        <div className="journal-card journal-card--3">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Boryet</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* 02 End */}
        <div className="journal-card journal-card--coming-soon">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Coming Soon</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* 02 End */}
        <div className="journal-card journal-card--coming-soon">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Cokming Soon</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* 02 End */}

      </div> 


    </div>
  )
}

export default Journal