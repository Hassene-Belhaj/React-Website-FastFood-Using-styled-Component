import { createGlobalStyle, styled } from 'styled-components'
import { FaPizzaSlice } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Secular One', sans-serif;
}
html {
    scroll-behavior: smooth;
    overflow: hidden;
}

`

export const NavBarContainer = styled.div`
width: 100%;
height: 80px;
background:transparent;
display: flex;
justify-content: space-between;
align-items: center;
`

export const NavBarLogo = styled.div`
width: 200px;
border : 3px solid #f43f5e;
padding: 10px;
font-size: 1.5rem;
color:  #fff;
margin-left: 2rem;
border-top-right-radius: 30%;
border-bottom-left-radius: 30%;
@media screen and (max-width:768px) {
position: absolute;
top: 5;
right: 50%;
transform: translateX(50%);
z-index: 500;
}
`
export const NavBarTopRight = styled.div`
width: 30%;

`

export const NavBarTopRighDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width : 880px) {
display    : none;
}
`
export const NavBarTopRighLink = styled(Link)`
margin: 0 2rem;
color: #fff;
text-decoration: none;
font-size: 1.2rem;
`

export const NavBarTopRightIcon = styled(FaPizzaSlice)`
display: none;
color: #facc15;
font-size: 2rem;
margin-right: 5rem;


@media screen and (max-width:880px) {
display    : block;
margin-right: 0rem;
position: absolute;
top: 25px;
right: 25px;
z-index: 500;
}
`