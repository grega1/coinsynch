import styled from "styled-components";
import { theme } from "styles/theme";

const {
  colors:{ primaryYellow, secondaryYellow, white}
} = theme;


export const ContainerCta = styled.section`
width:100%;
height:auto;
display:flex;
&:nth-child(3n){
  margin-bottom:80px;}
`

export const TitleCta = styled.h1`
font-weight:700;
font-size:48px;
line-height:56px;
color:${primaryYellow};
`

export const BoxCta = styled.div`
width:50%;
flex-wrap: wrap;
height:auto;
display:flex;
flex-direction:column;
align-items:flex-start;
`
export const ContentTagsCta = styled.div`
display:flex;
gap:64px;
width:100%;
`
export const Tags = styled.span`
display:block;
font-size:20px;
color:${primaryYellow};
background-color:${secondaryYellow};
`
