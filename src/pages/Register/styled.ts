import styled from 'styled-components';
import * as colors from '../../config/colors'

export const ContainerForm = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;

  @media(max-width:620px) {
   margin-left: unset;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    max-width: 400px;
    font-size: 16px;
    border: 2px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
    }

  }
  button {
      max-width: 200px;
      margin-left: 200px;
      margin-top: 15px;
      transition: all 200ms;
  }

  button:hover {
    filter: brightness(125%);
  }


  @media(max-width: 620px){
      button {
        max-width: 400px;
        margin-left: unset;
  }
}`;

