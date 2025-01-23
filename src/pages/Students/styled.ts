import styled from 'styled-components';
import { Link } from 'react-router-dom';
import App from './../../App';
import { FaWindowClose } from 'react-icons/fa';

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

  @media(max-width: 620px){
    .student-email {
      display: none;
      float: left;
    }

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

export const NewStudent = styled(Link)`
  display: block;
  padding: 20px 20px 20px;
  padding-left: 450px;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 1px solid lightslategrey;
  ;

  @media (max-width: 620px) {
    padding-left: 0px;
  }
`;



