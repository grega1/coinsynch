import styled from "styled-components";
import { theme } from "styles/theme";

const {
  colors:{ primaryYellow, secondaryYellow, white}
} = theme;

interface IContainerSquareProps{
  left?:string;
  bottom?:string;
}
export const ContainerSquare =styled.div<IContainerSquareProps>`
  display:flex;
  align-items:center;
  justify-content:center;
  width:80px;
  height:80px;
  border-radius:8px;
  background-color:${secondaryYellow};
  position:absolute;
  left:${(props)=>props.left};
  bottom:${(props)=>props.bottom};
  `
