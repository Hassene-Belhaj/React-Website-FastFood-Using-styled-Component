import { styled } from 'styled-components'


export const PizzaSectionContainer = styled.div`
width: 100%;
height: 100%;
background: #000;
`

export const PizzaSectionDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
padding: 3rem 0; 
gap: 2rem;

@media screen and (max-width:808px) {
    width: 80%;
    display: block;
    padding-top: 2rem;
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
margin-bottom: 8rem;
border-radius: 10px;
border:1px solid gray;
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
` 

export const PizzaSectionImage = styled.img`
display:flex;
flex-direction:column;
width: 400px;
height: 60%;
object-fit: cover; 
border-top-left-radius: 10px;
border-top-right-radius: 10px;
opacity: 0.7;
border-bottom: 5px solid yellow;
`

export const PizzaSectionH2 = styled.h2`
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