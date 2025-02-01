import styled from 'styled-components';
import * as colors from '../../config/colors';

interface TitleProps {
  isRed?: boolean;
}

export const Title = styled.h1<TitleProps>`

    margin-left: 0;
    text-align: center;

`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

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

  button {

  transition: filter 0.3s ease;
  }

  button:hover{
    filter: brightness(1.5);
  }
`
