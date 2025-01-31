import styled from 'styled-components';
import * as colors from '../../config/colors';

interface TitleProps {
  isRed?: boolean;
}

export const Title = styled.h1<TitleProps>`
margin-left: 25px;
  @media (max-width: 620px){
    margin-left: 0;
    text-align: center;
  }
`;

export const Form = styled.form`

  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    margin: 30px auto;
  }

  input {
    display: none;
  }

  img {
    width: 180px;
    height: 180px;
  }
`
