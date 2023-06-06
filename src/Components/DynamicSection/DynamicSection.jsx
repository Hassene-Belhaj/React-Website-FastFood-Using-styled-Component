import React from 'react'
import { SectionContainer, SectionDiv, SectionDivCard, SectionH2, SectionH3, SectionImage, SectionP, SectionP2 } from './DynamicSection.Style'
import { Button } from '../Hero/Hero.Style'
import { motion ,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'



const DynamicSection = ({heading,Data}) => {

 const {ref,inView} = useInView({
  threshold : 0.3, 
 }
 )

 const animation = useAnimation()


useEffect(()=>{
if(inView) {
  animation.start({
    opacity :  0.9,
    transition : {
      delay : 0.35 ,
      duration : 1.5 ,
    }
  })
  
} else {
  animation.start({
    opacity : 0.3 ,
  })
}

 },[inView])



  const VariantItem = {
    hidden : {
        // x : "-100vw"
        opacity : 0.1 ,
    },
    visible :{
        // x: 0 ,
        transition : {
            duration :  5} ,
        opacity : 1 ,
    }
}

  return (
   <>
   <SectionContainer ref={ref}>
    <motion.div 
    initial="hidden"
    // animate="visible"
    // variants={VariantItem}
    animate ={animation}
    > 

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
    </motion.div>
   </SectionContainer> 
   </>

  )
}

export default DynamicSection