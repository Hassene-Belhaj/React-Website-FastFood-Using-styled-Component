import React, { useEffect } from 'react'
import { Button, HeroCol, HeroContainer, HeroDecoration, HeroH1, HeroP,  } from './Hero.Style'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { useState } from 'react'
import { invariant, motion ,useAnimation} from 'framer-motion'
import { useInView} from 'react-intersection-observer'


const Hero = () => {
const [toggle,setToggle] = useState(false)

const {ref , inView} = useInView()

const animation = useAnimation()

useEffect(()=>{
if (inView) {
  animation.start({
     opacity : 1 ,
     transition : {
       duration : 0.5 ,
       delay : 0.25,
      }
  })

} else {
  animation.start({
   opacity : 0.6 ,
  })
}



},[inView])


const HandleToggle = () =>setToggle(!toggle)
  return (
    <HeroContainer >
        <Navbar  HandleToggle={HandleToggle} />
        <SideBar toggle={toggle? 1 : 0 } HandleToggle={HandleToggle} />
        <HeroCol>
            <HeroDecoration>
                <HeroH1>Greatest Pizza Ever</HeroH1>
            </HeroDecoration> 
            <HeroP ref={ref}>
                Ready In 60 sec !</HeroP>
                <motion.div
                initial="hidden"
                animate={animation}
                
                >
                  <Button>Place Order</Button>
                </motion.div>
        </HeroCol>
    </HeroContainer>
  )
}

export default Hero