import React from 'react'
import { Button, HeroCol, HeroContainer, HeroH1, HeroP } from './Hero.Style'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { useState } from 'react'

const Hero = () => {
const [toggle,setToggle] = useState(false)

const HandleToggle = () =>setToggle(!toggle)
  return (
    <HeroContainer>
        <Navbar  HandleToggle={HandleToggle} />
        <SideBar toggle={toggle} HandleToggle={HandleToggle} />
        <HeroCol>
            <HeroH1>Greatest Pizza Ever</HeroH1>
            <HeroP>Ready In 60 sec !</HeroP>
            <Button>Place Order</Button>
        </HeroCol>
    </HeroContainer>
  )
}

export default Hero