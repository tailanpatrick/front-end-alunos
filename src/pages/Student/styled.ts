import styled from 'styled-components';
import { primaryColor } from './../../config/colors';

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

export const ProfilePicture = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 0 20px;
  position: relative;
  margin: 30px 40px;
  margin-bottom: 5px;
  gap: 20px;

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;

  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 22px;
    left: 135px;
    color: #fff;
    background: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 30%;
    padding-left: 4px;
  }

  @media(max-width: 620px){
    align-items: center;
    justify-content: center;

    a {
      left: 165px;
      bottom: 24px;
    }
  }
`;
