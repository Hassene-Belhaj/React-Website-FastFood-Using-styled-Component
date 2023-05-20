import { styled } from 'styled-components'


export const PizzaSectionContainer = styled.div`
width: 100%;
height: 100%;
background: #000;
`

export const PizzaSectionDiv = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 3rem 0; 
gap: 2rem;

@media screen and (max-width:808px) {
    width: 100%;
    display: block;
    padding-top: 5rem;
    }
`

export const PizzaSectionDivCard = styled.div`
background: #000;
width: 400px;
height: 700px;
display: flex;
margin-left: auto;
margin-right:auto;
flex-direction: column;
align-items: center;
margin: 0 auto;
margin-bottom: 4rem;
/* border-radius: 10px; */
transition: all 0.2s ease-in-out;


&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
@media screen and (max-width : 880px) {
  width:360px;  
}
` 

export const PizzaSectionImage = styled.img`
display:flex;
flex-direction:column;
width: 400px;
height: 50%;
object-fit: cover; 
/* border-top-left-radius: 10px;
border-top-right-radius: 10px; */
opacity: 0.7;
border-right: 4px solid #fcd34d ;
border-bottom: 4px solid #fcd34d;
padding: 10px 10px;
@media screen and (max-width : 880px) {
  width:360px;  
}
`

export const PizzaSectionH2 = styled.h2`
text-align: center;
font-size: 3rem;
color: #fff;
padding-top: 3rem;
padding-bottom: 3rem;
letter-spacing: 3px;
`


export const PizzaSectionH3 = styled.h3`
text-align: center;
font-size: 2rem;
color: #fff;
padding: 1rem 0;
letter-spacing: 1px;
`

export const PizzaSectionP = styled.p`
text-align: center;
font-size: 1.1rem;
color: #fff;
padding: 1rem 0;
letter-spacing: 1px;
`
export const PizzaSectionP2 = styled.p`
text-align: center;
font-size: 1.6rem;
color: #fff;
padding: 1rem 0;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
`