import styled from 'styled-components';
import { theme } from '../../styles/theme';

const {
  colors: { primaryYellow, white },
} = theme;
export const ContainerTopCryptos = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ViewMoreButton = styled.button`
background-color:${white};
border:none;
color:${primaryYellow};
font-weight: 400;
font-size: 16px;
`
