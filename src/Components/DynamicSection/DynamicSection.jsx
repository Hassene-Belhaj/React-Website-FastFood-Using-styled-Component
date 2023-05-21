import React from 'react'
import { SectionContainer, SectionDiv, SectionDivCard, SectionH2, SectionH3, SectionImage, SectionP, SectionP2 } from './DynamicSection.Style'
import { Button } from '../Hero/Hero.Style'

const DynamicSection = ({heading,Data}) => {

  return (
   <>
   <SectionContainer>
    <SectionH2>{heading}</SectionH2>
   <SectionDiv>
     {Data.map((item,index)=>{
      return (
         <SectionDivCard key={index}>
         <SectionImage src={item.image} alt={item.alt} />
         <SectionH3>{item.title}</SectionH3>
         <SectionP>" {item.desc}"</SectionP>
         <SectionP2>{item.price}</SectionP2>
         <Button>Add To Cart</Button>
         </SectionDivCard>
      )
     })}
   </SectionDiv>
   </SectionContainer> 
   </>

  )
}

export default DynamicSection