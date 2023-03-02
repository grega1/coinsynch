import styled from "styled-components";
import { theme } from "styles/theme";

const {
  colors: { primaryYellow, secondaryYellow, white },
} = theme;

export const ContainerNewsLetter= styled.section`
width:100%;
display:flex;
background-color:${primaryYellow};
justify-content:space-around;
align-items:center;
`;
export const ContentNewsLetter = styled.div`
display:flex;
flex-direction:column;
align-items:start;
`

export const InputNewsLetter = styled.input`
width:384px;
height:48px;
border-radius:6px;
box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
`
export const LabelNewsLetter = styled.label`
font-weight: 400;
font-size: 14px;
`
