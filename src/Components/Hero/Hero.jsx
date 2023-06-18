import React, { useEffect } from 'react'
import { Button, HeroCol, HeroContainer, HeroDecoration, HeroH1, HeroP,  } from './Hero.Style'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { useState } from 'react'
import { motion ,useAnimation} from 'framer-motion'
import { useInView} from 'react-intersection-observer'


const Hero = () => {
const [toggle,setToggle] = useState(false)

const {ref , inView} = useInView()

const animation = useAnimation()






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
        <HeroCol variants={{
          hidden : { opacity : 0 , x : -200} ,
          visible : { opacity : 1 ,x : 0}
        }}
        animate={animation}
        transition={{
          duration : 0.5 ,
          straggerChildren : 0.5
        }}>
            <HeroDecoration>
                <HeroH1 >Greatest Pizza Ever</HeroH1>
            </HeroDecoration> 
            <HeroP>
                Ready In 60 sec !</HeroP>
                  <Button>Place Order</Button>
        </HeroCol>

        {/* </motion.div> */}
    </HeroContainer>
  )
}

export default Hero