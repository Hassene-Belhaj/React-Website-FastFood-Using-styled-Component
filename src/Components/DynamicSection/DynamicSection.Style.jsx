import { styled } from 'styled-components'


export const SectionContainer = styled.div`
width: 100%;
height: 100%;
background: #000;
`

export const SectionDiv = styled.div`
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

export const SectionDivCard = styled.div`
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

export const SectionImage = styled.img`
display:flex;
flex-direction:column;
width: 400px;
height: 50%;
object-fit: cover; 
border-top-left-radius: 60px;
opacity: 0.8;
/* border-right: 4px solid #fcd34d ;
border-bottom: 4px solid #fcd34d; */
padding: 10px 10px;
box-shadow: 10px 10px #fcd34d;

@media screen and (max-width : 880px) {
  width:360px;  

}
`

export const SectionH2 = styled.h2`
text-align: center;
font-size: 3rem;
color: #fff;
padding-top: 3rem;
padding-bottom: 3rem;
letter-spacing: 3px;
`


export const SectionH3 = styled.h3`
text-align: center;
font-size: 2rem;
color: #fff;
padding: 1rem 0;
letter-spacing: 1px;
`

export const SectionP = styled.p`
text-align: center;
font-size: 1.1rem;
color: #fff;
padding: 1rem 0;
letter-spacing: 1px;
`
export const SectionP2 = styled.p`
text-align: center;
font-size: 1.6rem;
color: #fff;
padding: 1rem 0;
font-family: 'Open Sans', sans-serif;
font-weight: 600;
`