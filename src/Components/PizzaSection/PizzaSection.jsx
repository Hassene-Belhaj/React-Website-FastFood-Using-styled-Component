import React from 'react'
import { PizzaSectionContainer, PizzaSectionDiv, PizzaSectionDivCard, PizzaSectionH2, PizzaSectionH3, PizzaSectionImage, PizzaSectionP, PizzaSectionP2 } from './PizzaSection.Style'
import { Data } from './Data'
import { Button } from '../Hero/Hero.Style'

const PizzaSection = () => {

  return (
   <>
   <PizzaSectionContainer>
    <PizzaSectionH2>Choose Your Favorite</PizzaSectionH2>
   <PizzaSectionDiv>
     {Data.map((item,index)=>{
      return (
         <PizzaSectionDivCard key={index}>
         <PizzaSectionImage src={item.image} />
         <PizzaSectionH3>{item.title}</PizzaSectionH3>
         <PizzaSectionP>" {item.ingredients} "</PizzaSectionP>
         <PizzaSectionP2>{item.price}</PizzaSectionP2>
         <Button>Add To Cart</Button>
         </PizzaSectionDivCard>
      )
     })}
   </PizzaSectionDiv>
   </PizzaSectionContainer> 
   </>

  )
}

export default PizzaSection