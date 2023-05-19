import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { GlobalStyle } from './Components/Navbar/Navbar.Style'
import Hero from './Components/Hero/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <GlobalStyle/>
    <Hero />
    </Router>
  )
}

export default App