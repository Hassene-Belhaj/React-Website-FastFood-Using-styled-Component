import React from 'react'
import { PizzaSectionContainer, PizzaSectionDiv, PizzaSectionDivCard, PizzaSectionImage } from './PizzaSection.Style'
import { Data } from './Data'

const PizzaSection = () => {

  return (
   <>
   <PizzaSectionContainer>
   <PizzaSectionDiv>
     {Data.map((item,index)=>{
      return (
         <PizzaSectionDivCard key={index}>
         <PizzaSectionImage src={item.image} />
         </PizzaSectionDivCard>
      )
     })}
   </PizzaSectionDiv>
   </PizzaSectionContainer> 
   </>

  )
}

export default PizzaSection