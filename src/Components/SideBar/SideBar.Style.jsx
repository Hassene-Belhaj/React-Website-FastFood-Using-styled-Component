import { styled } from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const SideBarContainer = styled.div`
position: fixed;
width: 380px;
height: 100vh;
top: 0;
right:${({toggle})=>(!toggle ? "-100%" : 0)} ;
bottom: 0;
z-index: 500;
background:#000;
transition: all 0.4s ease-in-out;
`
export const SideBarDiv = styled.div`
width: 80%;
height: 80%;
display: flex;
margin: auto;
justify-content: center;
padding: 15rem 0;

`
export const SideBarDivLink = styled.div`
height: 50%;
display: flex;
flex-direction: column;
`
export const SideBarLinksItem = styled(Link)`
display: flex;
color: #facc15;
font-size:1.8rem;
margin: 1rem 0;
text-decoration: none;
transition: all 0.3s ease-in-out;
margin-bottom: 2rem;
cursor: pointer;
&:hover {
text-decoration: underline;
transition: all 0.3s ease-in-out;
text-underline-offset: 1rem;
}
`
export const SideBarDivButton = styled.div`
display: flex;
justify-content: center;

`


export const SideBarIcon = styled(AiOutlineClose)`
font-size: 25px;
color: #facc15;
position: absolute;
right: 15px;
top: 15px;
z-index: 600;
cursor: pointer;

`