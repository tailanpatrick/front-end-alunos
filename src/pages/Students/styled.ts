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

export const StudentContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: solid 1px lightgray;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const StudentActions = styled.div`
  gap: 25px;
`;


