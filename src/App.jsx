import React from 'react'
import { GlobalStyle } from './Components/Navbar/Navbar.Style'
import Hero from './Components/Hero/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Section1 from './Components/DynamicSection/DynamicSection'
import PizzaOfTheDaySection from './Components/PizzaOfTheDaySection/PizzaOfTheDaySection'
import { Data, DataTwo } from './Components/DynamicSection/Data'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (

    <Router>
        <GlobalStyle/>
        <Hero />
        <Section1   heading={'Choose Your Favorite'} Data={Data} />
        <PizzaOfTheDaySection/>
        <Section1 heading={'Sweet Treats For You'} Data={DataTwo} />
        <Footer />
    </Router>
  )
}

export default App