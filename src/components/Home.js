import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'

function Home() {
  // const [navClicked, setNavClicked] = useState(false);
  // const [navClass, setNavClass] = useState("u-hidden");

  // const openNav = () => {
  //   if (!navClicked) {
  //     setNavClass("")
  //   } else {
  //     setNavClass("u-hidden")
  //   }
  // }


  return (
    <div className="home">



    <div className="home__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">
          Dwayne</span>
        <span className="heading-primary--sub">
          the shell</span>
    </h1>
    </div>


     <div className="home__img-box">
      <Link to="/navigate" ><img className="home__img" src="https://i.imgur.com/go7u9Zn.png" /></Link>
     </div>


    



    </div>
  )
}

export default Home