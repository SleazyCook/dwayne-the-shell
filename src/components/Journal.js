import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronCircleLeft } from 'react-icons/fa'

import Footer from './Footer'

function Journal() {
  const slider = useRef(null);

  const slideLeft = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft -500, behavior: 'smooth'}) 
    console.log(slider)
  }

  const slideRight = (event) => {
    slider.current.scroll({ left: slider.current.scrollLeft + 500, behavior: 'smooth'}) 
    console.log(slider)
  }

  return (
    <div className="journal">

      <h2 className="heading-secondary"><Link to="/navigate">Journal</Link></h2>

      <div ref={slider} className="journal__main">

        <div className="journal__nav-icon journal__nav-icon--left">
          <FaChevronCircleLeft className="journal__icon" onClick={slideLeft}/>
        </div>
        <div className="journal__nav-icon journal__nav-icon--right">
            <FaChevronCircleRight className="journal__icon" onClick={slideRight}/>
        </div>

        <Link to="/journal/01" className="journal__link">
          <div className="journal-card journal-card--1">
            <div className="journal-card__text-box">
              <span className="journal-card__text-box--main">
                Introduction</span>
              <span className="journal-card__text-box--sub">
                11/06/2022</span>
            </div>
          </div> {/* 01 End */}
        </Link>

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
        </div> {/* CS End */}

        <div className="journal-card journal-card--coming-soon">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Coming Soon</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* CS End */}

        <div className="journal-card journal-card--coming-soon">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Coming Soon</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* CS End */}

        <div className="journal-card journal-card--coming-soon">
          <div className="journal-card__text-box">
            <span className="journal-card__text-box--main">
            Coming Soon</span>
            <span className="journal-card__text-box--sub">
              02/25/2023</span>
          </div>
        </div> {/* CS End */}

      </div> 

      {/* <Footer /> */}


    </div>
  )
}

export default Journal