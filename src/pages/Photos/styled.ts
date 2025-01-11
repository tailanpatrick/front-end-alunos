import styled from 'styled-components';

interface TitleProps {
  isRed?: boolean;
}

export const Title = styled.h1<TitleProps>`
  background: green;

  small {
    font-size: 8px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;
