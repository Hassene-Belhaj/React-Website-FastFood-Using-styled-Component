import React from 'react'
import { FooterContainer, FooterContainerDiv, FooterDivOne, FooterFlexThree, FooterFlexTwo, FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4, FooterIcon5, FooterLogo } from './Footer.Style'
import { NavBarLogo } from '../Navbar/Navbar.Style'
import { motion ,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Footer = () => {
  const {inView,ref} = useInView()
  const animation = useAnimation()

const itemVariants = {
  hidden : {opacity : 0 , x : -200} ,
  visible : {opacity :  1 , x : 0 ,
  transition : {
    duration : 0.4 ,
    staggerChildren : 0.3 
  }
  
  } ,

}


 useEffect(()=>{
 if(inView) {
 animation.start('visible')

 } else {
 animation.start('hidden')  
 }

 },[inView]) 

  return (
    <FooterContainer ref={ref}>
      <FooterContainerDiv
        variants={itemVariants}
        animate={animation}
      >
      <FooterDivOne variants={itemVariants}>
        <FooterLogo>
        <p>Pizza <span style={{color:"#facc15"}}>di Napoli</span></p>
        </FooterLogo>
      </FooterDivOne>

            <FooterFlexTwo variants={itemVariants}>"l'Unico Vero Gusto Italiano ! "</FooterFlexTwo>

      <FooterFlexThree variants={itemVariants}>
      
              <FooterIcon1 size={25} />
              <FooterIcon2 size={25} />
              <FooterIcon3 size={25} />
              <FooterIcon4 size={25} />
              <FooterIcon5 size={25} />
      
      </FooterFlexThree>
      </FooterContainerDiv>
    </FooterContainer>
  )
}

export default Footer