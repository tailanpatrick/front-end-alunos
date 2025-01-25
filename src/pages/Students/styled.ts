import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    gap: 15px;
  }

  div + div {
    border-top: solid 1px lightgray;
  }

  .student-name {
    flex: 1;
    text-align: left;
    min-width: 150px;
  }

  .student-email {
    flex: 1;
    text-align: left;
    min-width: 200px;
  }

  @media (max-width: 620px) {
    .student-email {
      display: none;
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
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const NewStudent = styled(Link)`
  display: block;
  padding: 20px 20px 20px;
  padding-left: 450px;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 1px solid lightslategrey;

  @media (max-width: 620px) {
    padding-left: 0px;
  }
`;
