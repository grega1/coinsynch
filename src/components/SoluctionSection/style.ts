import styled from 'styled-components';
import { theme } from '../../styles/theme';

const {
  colors: { primaryYellow, white },
} = theme;
export const ContainerSoluction = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentSoluction = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
interface IRowCardsSoluctionProps {
  alignItems?: string;
}
export const RowCardsSoluction = styled.div<IRowCardsSoluctionProps>`
  width: 100%;
  display:flex;
  justify-content: space-between;[
  align-items:${(props) => props.alignItems || 'flex-start'};
`;
