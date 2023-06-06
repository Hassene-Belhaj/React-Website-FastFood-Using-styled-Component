import React from 'react'
import { GlobalStyle } from './Components/Navbar/Navbar.Style'
import Hero from './Components/Hero/Hero'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PizzaOfTheDaySection from './Components/PizzaOfTheDaySection/PizzaOfTheDaySection'
import { Data, DataTwo } from './Components/DynamicSection/Data'
import Footer from './Components/Footer/Footer'
import DynamicSection from './Components/DynamicSection/DynamicSection'



const App = () => {



  
  return (

    <Router>
        <GlobalStyle/>
        <Hero />
        <DynamicSection   heading={'Choose Your Favorite'} Data={Data} />
        <PizzaOfTheDaySection/>
        <DynamicSection heading={'Sweet Treats For You'} Data={DataTwo} />
        <Footer />
    </Router>
  )
}

export default App