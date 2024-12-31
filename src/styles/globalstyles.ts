import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css'

// Definindo estilos globais
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root  {
    height:100%;
  }

  body {
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  /* Global styles para icone de toasts de sucesso */
  body .Toastify .Toastify__toast-container .Toastify__toast--success .Toastify__toast-icon  svg{
    fill: ${colors.successColor};
    width: 24px;
    height: 24px;
  }

  /* Global styles para icone de toasts de error */
  body .Toastify .Toastify__toast-container .Toastify__toast--error .Toastify__toast-icon {
    fill: ${colors.errorColor};
    width: 24px;
    height: 24px;
  }

  /* Global styles para a barra de progresso de toasts de sucesso */
  .Toastify__toast-container .Toastify__toast--success .Toastify__progress-bar {
    background-color: ${colors.successColor} !important;
    height: 4px !important;
    border-radius: 2px !important;
  }

  /* Global styles para a barra de progresso de toasts de error */
  .Toastify__toast-container .Toastify__toast--error .Toastify__progress-bar {
    background-color: red !important;
  }
`;

export const Container = styled.section`
  max-width: 660px;
  background: #FFFF;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0,0,0,.1) ;
`;
