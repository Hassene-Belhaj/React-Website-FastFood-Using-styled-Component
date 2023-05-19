import { styled } from 'styled-components'
import ImgBG from '../../../public/images/pizza2.jpg'

export const HeroContainer = styled.div`
height: 100vh;
background: linear-gradient(
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.7)
  ), url(${ImgBG});
background-position: center;
background-size: cover;
opacity: 1;
`