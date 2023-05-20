import React from 'react'
import { PizzaSectionContainer, PizzaSectionDiv, PizzaSectionDivCard, PizzaSectionH2, PizzaSectionImage, PizzaSectionP } from './PizzaSection.Style'
import { Data } from './Data'
import { Button } from '../Hero/Hero.Style'

const PizzaSection = () => {

  return (
   <>
   <PizzaSectionContainer>
   <PizzaSectionDiv>
     {Data.map((item,index)=>{
      return (
         <PizzaSectionDivCard key={index}>
         <PizzaSectionImage src={item.image} />
         <PizzaSectionH2>{item.title}</PizzaSectionH2>
         <PizzaSectionP>{item.ingredients}</PizzaSectionP>
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