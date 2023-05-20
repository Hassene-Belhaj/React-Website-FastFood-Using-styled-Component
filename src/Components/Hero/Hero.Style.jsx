import { styled } from 'styled-components'
import ImgBG from '../../../public/images/pizza2.jpg'

export const HeroContainer = styled.div`
height: 100vh;
background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url(${ImgBG});
background-position: center;
background-size: cover;
opacity: 1;
`
export const HeroCol = styled.div`
width: 500px;
height: 100%;
display: flex;
flex-direction: column;
padding-top: 12rem;
padding-left: 5rem;
@media screen and (max-width : 880px) {
width :100% ;
justify-content:center;
align-items: center;
padding-top: 0;
padding-left: 0;
text-align: center;
}
`

export const HeroH1 = styled.h1`
font-size: 4rem;
color: #fff;
padding-right: 10px;
letter-spacing: 3px;
@media screen and (max-width:786px){
font-size  :3rem ;
}
`
export const HeroDecoration = styled.div`
position: relative;
`


export const HeroP = styled.p`
font-size: 1.8rem;
color: #fff;
margin: 1rem 0;
`
export const Button = styled.button`
width: ${({width})=>width};
background-color: #eab308;
border: none;
padding: 1rem 2rem;
margin: 1rem  0;
border-radius : 8px;
color: #000;
font-size: 1.5rem;
transition: all 0.2s ease-in-out;
&:hover {
    background:#f1c71f ;
    transition: all 0.2s ease-in-out;

}

`