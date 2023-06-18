import React from 'react'
import { PizzaOfTheDayDivBtn, PizzaOfTheDayH2, PizzaOfTheDayp, PizzaOfdaySectionContainer } from './PizzaOfTheDaySection.Style'
import { Button } from '../Hero/Hero.Style'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const PizzaOfTheDaySection = () => {
   const {inView,ref} = useInView()
   const animation = useAnimation()


  useEffect(()=>{
  if(inView) {
  animation.start('visible')

  } else {
  animation.start('hidden')  
  }

  },[inView]) 

  return (
    <PizzaOfdaySectionContainer>
     <motion.div ref={ref}
     variants={{
      hidden : {opacity : 0 , y : 150} ,
      visible : {opacity : 1 , y : 0}
    }}
    animate={animation}
    transition={{
      duration : 1

    }} 
     >
    <PizzaOfTheDayH2>pizza of the day
    <PizzaOfTheDayp>truffle alfredo sauce topped with 24 carat gold dust</PizzaOfTheDayp>
    </PizzaOfTheDayH2>
     <PizzaOfTheDayDivBtn>
       <Button width={"20rem"}>Order Now</Button>
     </PizzaOfTheDayDivBtn>
      </motion.div> 
    </PizzaOfdaySectionContainer>
  )
}

export default PizzaOfTheDaySection