import React from 'react'
import { SideBarContainer, SideBarDiv, SideBarDivButton, SideBarDivLink, SideBarIcon, SideBarLinksItem } from './SideBar.Style'
import { Button } from '../Hero/Hero.Style'

const SideBar = ({toggle,HandleToggle}) => {
  return (
    <SideBarContainer toggle={toggle}>
        <SideBarDiv>
            <SideBarIcon onClick={HandleToggle}></SideBarIcon>
            <SideBarDivLink>
              <SideBarLinksItem>Pizzas</SideBarLinksItem>
              <SideBarLinksItem>Desserts</SideBarLinksItem>
              <SideBarLinksItem>Full Menu</SideBarLinksItem>
            </SideBarDivLink>
        </SideBarDiv>
        <SideBarDivButton><Button >Order Now</Button></SideBarDivButton>
              
    </SideBarContainer>
  )
}

export default SideBar