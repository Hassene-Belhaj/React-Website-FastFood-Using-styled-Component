import { styled } from "styled-components";
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter,BsLinkedin } from 'react-icons/bs'
import { motion } from "framer-motion";

export const FooterContainer = styled.div`
width: 100%;
height: 30vh;
background: #000;


@media screen and (max-width : 880px) {
height: 50vh;    
}
`
export const FooterContainerDiv = styled(motion.div)`
width: 80%;
height: 100%;
margin: auto;
color: white;
display: flex;
align-items:end;
padding-bottom: 1rem;
@media screen and (max-width : 880px) {
    display :block;
    text-align:center;
    padding: 2rem 0;
}
`

export const FooterDivOne= styled(motion.div)`
width: 33%;
@media screen and (max-width : 880px) {
display    :block ;
width    :100% ;
margin: 2rem 0;
}
`

export const FooterFlexTwo= styled(motion.div)`
width: 40%;
display: flex;
font-size: 1.2rem;
letter-spacing: 2px;
font-family:poppins;
font-style: italic;
@media screen and (max-width : 880px){
width: 100%;
justify-content: center;
margin: 4rem 0;

}
`
export const FooterFlexThree= styled(motion.div)`
width: 25%;
display: flex;
justify-content: space-between;
@media screen and (max-width : 880px){
width   : 100%;
}
`

export const FooterIcon1 = styled(BsInstagram)`
`
export const FooterIcon2 = styled(BsFacebook)`
`
export const FooterIcon3 = styled(BsYoutube)`
`
export const FooterIcon4 = styled(BsTwitter)`
`
export const FooterIcon5 = styled(BsLinkedin)`
`

export const FooterLogo = styled.div`
width: 140px;
border : 3px solid #f43f5e;
padding: 10px;
font-size: 1rem;
color:  #fff;
margin-left: 2rem;
border-top-right-radius: 30%;
border-bottom-left-radius: 30%;
@media screen and (max-width:968px) {
margin: auto;
}
`