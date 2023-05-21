import React from 'react'
import { SectionContainer, SectionDiv, SectionDivCard, SectionH2, SectionH3, SectionImage, SectionP, SectionP2 } from '../Section1/Section1.Style'
import { Button } from '../Hero/Hero.Style'
import { Data2 } from '../Section1/Data'

const Section2 = () => {
  return (
    <>
    <SectionContainer>
     <SectionH2>Sweet Treats For You</SectionH2>
    <SectionDiv>
      {Data2.map((item,index)=>{
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

export default Section2