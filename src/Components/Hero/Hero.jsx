import React, { useEffect } from 'react'
import { Button, HeroCol, HeroContainer,HeroH1,HeroP, Span} from './Hero.Style'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { useState } from 'react'
import { motion ,useAnimation} from 'framer-motion'
import { useInView} from 'react-intersection-observer'


const Hero = () => {
const [toggle,setToggle] = useState(false)

const {ref , inView} = useInView()

const animation = useAnimation()

const itemVariants = {
  hidden: { opacity : 0 , x : -250} ,
  visible: { opacity : 1 , x : 0 ,
  transition :{
  duration : 0.4 ,
  staggerChildren : 0.3
  }  
  } 
}





useEffect(()=>{
if (inView) {
  animation.start('visible')

} else {
  animation.start('hidden')
}

},[inView])


const HandleToggle = () =>setToggle(!toggle)
  return (
    <HeroContainer ref={ref} >
        <Navbar  HandleToggle={HandleToggle}/>
        <SideBar toggle={toggle? 1 : 0 } HandleToggle={HandleToggle} />
  
        <HeroCol 
        variants={itemVariants} 
        animate={animation}   
        >

        <HeroH1 variants={itemVariants} >Greatest Pizza Ever</HeroH1>

        <HeroP variants={itemVariants} >Ready In 60 sec !</HeroP>
     
      <Span variants={itemVariants} >
         <Button >Place Order</Button>
      </Span>       
        </HeroCol>
        

        {/* </motion.div> */}
    </HeroContainer>
  )
}

export default Hero