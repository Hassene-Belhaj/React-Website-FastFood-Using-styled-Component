import React from 'react'
import { NavBarContainer, NavBarLogo, NavBarTopRighDiv, NavBarTopRighLink, NavBarTopRight, NavBarTopRightIcon } from './Navbar.Style'

const Navbar = ({HandleToggle}) => {
  return (
    <NavBarContainer>
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