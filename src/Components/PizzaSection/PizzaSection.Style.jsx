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
margin: auto;
padding: 3rem;
gap: 2rem;
@media screen and (max-width:808px) {
    display: block;
}
`

export const PizzaSectionDivCard = styled.div`
background: #000;
width: 430px;
height: 600px;
display: flex;
margin-left: auto;
margin-right:auto;
flex-direction: column;
align-items: center;
margin: 4rem auto;
border-radius: 10px;
border:1px solid gray;
` 

export const PizzaSectionImage = styled.img`
display:flex;
flex-direction:column;
width: 430px;
height: 60%;
object-fit: cover; 
border-radius: 10px;


`