import React from 'react'
import { GlobalStyle } from './Components/Navbar/Navbar.Style'
import Hero from './Components/Hero/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import { Data } from './Components/Section1/Data'



const App = () => {
  return (
    
    <Router>
    <GlobalStyle/>
    <Hero />
    <Section1 />
    <Section2 />
    </Router>
  )
}

export default App