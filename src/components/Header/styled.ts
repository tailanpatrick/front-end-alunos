import styled from 'styled-components';
import { primaryColor } from '../../config/colors'

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 150px;

  a {
    color:#ffff;
    margin: 0 10px 0;
    font-weight: bold;
  }

  @media (max-width: 680px) {
    gap: 40px;
    justify-content: space-around;
    a {
      font-size: 18px;
    }
  }
`;
