import React from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'

function Home() {
  return (
    <div className="home">

      <div className="home__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            Dwayne</span>
          <span className="heading-primary--sub">
            the Shell</span>
      </h1>
      </div>


     <div className="home__img-box">
      <Link to="journal">
        <img src="https://i.imgur.com/go7u9Zn.png" />
      </Link>
     </div>


    </div>
  )
}

export default Home