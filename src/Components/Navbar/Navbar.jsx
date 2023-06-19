import React from 'react'
import { NavBarContainer, NavBarLogo, NavBarTopRighDiv, NavBarTopRighLink, NavBarTopRight, NavBarTopRightIcon } from './Navbar.Style'
import { motion } from 'framer-motion'

const Navbar = ({HandleToggle}) => {


  
  return (
    <NavBarContainer 
    variants={{
      hidden :{opacity : 0 , y : -200},
      visible : {opacity : 1 , y : 0 },
    }}
    animate='visible'
    initial='hidden'
    transition={{
      duration : 0.8 ,
      type : 'spring' ,
      bounce : 0.4

    }}
    >
      <NavBarLogo>
        <p>Pizza <span style={{color:"#facc15"}}>di Napoli</span></p>
      </NavBarLogo>
      <NavBarTopRight>
          <NavBarTopRighDiv>
               <NavBarTopRighLink>Menu</NavBarTopRighLink>
               <NavBarTopRighLink>About Us</NavBarTopRighLink>
           </NavBarTopRighDiv>
        <NavBarTopRightIcon onClick={HandleToggle}></NavBarTopRightIcon>
      </NavBarTopRight>
    </NavBarContainer>
  )
}

export default Navbar