import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'

import axios from '../../services/axios';

import { Container } from "../../styles/globalstyles";
import { Title, Paragraph } from './styled';
import { toast } from 'react-toastify';

import { buttonClickedRequest } from "../../store/reducers/buttonRequest";

export default function Login() {
  const dispatch = useDispatch()

  useEffect(()=> {
    async function getData(){
      const response = await axios.get('/users');
      console.log(response.data)
    }
    getData();
  },[]);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(buttonClickedRequest());
  }

  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur .</Paragraph>
      <button onClick={handleClick}>Enviar</button>
    </Container>
  );
}
