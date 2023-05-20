import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { GlobalStyle } from './Components/Navbar/Navbar.Style'
import Hero from './Components/Hero/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PizzaSection from './Components/PizzaSection/PizzaSection'

const App = () => {
  return (
    
    <Router>
    <GlobalStyle/>
    <Hero />
    <PizzaSection />
    </Router>
  )
}

export default App