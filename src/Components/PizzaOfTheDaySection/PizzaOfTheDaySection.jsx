import React from 'react'
import { PizzaOfTheDayDivBtn, PizzaOfTheDayH2, PizzaOfTheDayp, PizzaOfdaySectionContainer } from './PizzaOfTheDaySection.Style'
import { Button } from '../Hero/Hero.Style'

const PizzaOfTheDaySection = () => {
  return (
    <PizzaOfdaySectionContainer>
    <PizzaOfTheDayH2>pizza of the day
    <PizzaOfTheDayp>truffle alfredo sauce topped with 24 carat gold dust</PizzaOfTheDayp>
    </PizzaOfTheDayH2>
     <PizzaOfTheDayDivBtn>
       <Button width={"20rem"}>Order Now</Button>
     </PizzaOfTheDayDivBtn>
    </PizzaOfdaySectionContainer>
  )
}

export default PizzaOfTheDaySection