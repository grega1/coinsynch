import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import { theme } from './theme';

const {
  colors:{primaryYellow, secondaryYellow, secondary, terciary, quaternary, white, black, textBase}
} = theme;
export const GlobalStyle = createGlobalStyle`
   * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
    letter-spacing: 0.025rem;
  }

  body {

    #root {
      display: flex;
      flex-direction: column;
      align-items:center;
      width: 100%;
    }
  }

  blockquote, q {
    quotes: none;
  }

  *:before,
  *:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

`;
export const Input = styled.input`

`

interface IButtonProps {
  width?: string;
  fontSize?: string;
}

export const Button = styled.button<IButtonProps>`
 background-color: ${primaryYellow};
  color: ${white};
  border-radius:32px; 
  padding: 8px 16px;
  font-weight: 400;
  cursor: pointer;
  width: ${(props) => props.width || 'min-content'};
  font-size: ${(props) => props.fontSize || '36px'};
  height:48px;
`
interface ISpanProps{
  color?:string;
}
export const Span = styled.span<ISpanProps>`
  color: ${(props) => props.color || textBase};
`