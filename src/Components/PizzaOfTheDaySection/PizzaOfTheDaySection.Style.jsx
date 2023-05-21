import { styled } from 'styled-components'
import img10 from'/images/featured3.jpg'

export const PizzaOfdaySectionContainer = styled.div`
width: 100%;
height: 80vh;
background:linear-gradient(
rgba(0,0,0,0.7),
rgba(0,0,0,0.7)    
),url(${img10});
background-image:center;
background-size: cover;
color: #fff;
`
export const PizzaOfTheDayH2 = styled.h2`
width: 100%;
text-align: center;
padding-top: 10rem;
font-size:5rem;
text-transform: capitalize;
@media screen and (max-width : 880px) {
font-size:4rem;    
letter-spacing :3px ;
}
`
export const PizzaOfTheDayp = styled.p`
width: 100%;
height: 100%;
text-align:center;
font-size: 2rem;
text-transform: capitalize;
letter-spacing: 3px;
@media screen and (max-width : 1080px) {
font-size:2rem;    
}
`
export const PizzaOfTheDayDivBtn = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 3rem ;

`