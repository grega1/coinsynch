import styled from "styled-components";
import { theme } from "styles/theme";

const {
  colors:{ primaryYellow, secondaryYellow, white}
} = theme;


export const ContainerCard = styled.div`
width: 400px;
height: 500px;
position:relative;
`
interface IBackgroundRetangleProps{
  width?:string,
  height?:string,
  left?:string,
  bottom?:string,
}
export const BackgroundRetangle= styled.div<IBackgroundRetangleProps>`
position: relative;
width:${(props)=>props.width || '269px'};
height:${(props)=>props.height ||'420px'};
left:${(props)=>props.left || '120px'};
bottom:${(props)=>props.bottom || '0px'};
color:${primaryYellow};
`
