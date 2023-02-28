import styled from "styled-components";
import {theme} from '../../styles/theme'

const {
  colors:{ terciary, quaternary, textBase}
} = theme;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height:64px;
  background-color: red;
  padding: 0 32px;
`
export const NavLogoBox = styled.div`
width:120px;
height:100%;
display:flex;
gap:8px;
`
export const NavLetter = styled.div`	
width:auto;
display:flex;
gap:8px;
`
