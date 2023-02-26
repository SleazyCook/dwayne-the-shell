import React from 'react'
import { Outlet } from 'react-router-dom'

import './css/style.css'

import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

function App() {
  return (
    <div>

      <Outlet context/>


    </div>
  )
}

export default App