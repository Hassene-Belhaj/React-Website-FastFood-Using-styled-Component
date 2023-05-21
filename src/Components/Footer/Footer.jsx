import React from 'react'
import { FooterContainer, FooterContainerDiv, FooterDivOne, FooterFlexThree, FooterFlexTwo, FooterIcon1, FooterIcon2, FooterIcon3, FooterIcon4, FooterIcon5, FooterLogo } from './Footer.Style'
import { NavBarLogo } from '../Navbar/Navbar.Style'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerDiv>
      <FooterDivOne>
        <FooterLogo>
        <p>Pizza <span style={{color:"#facc15"}}>di Napoli</span></p>
        </FooterLogo>
      </FooterDivOne>
      <FooterFlexTwo>"l'Unico Vero Gusto Italiano ! "</FooterFlexTwo>
      <FooterFlexThree>
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