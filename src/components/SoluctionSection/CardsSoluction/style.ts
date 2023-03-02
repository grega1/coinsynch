import styled from 'styled-components';
import { theme } from '../../../styles/theme';

const {
  colors: { primaryYellow, white },
} = theme;

export const CardSoluction = styled.div`
  width: 280px;
  height: 268px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 16px;
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  p {
    font-weight: 400;
    font-size: 14px;
  }
`;
export const CardSubTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: ${primaryYellow};
`;
export const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 24px;
`;
