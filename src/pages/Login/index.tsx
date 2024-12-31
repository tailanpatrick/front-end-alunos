import React, { useEffect } from "react";
import axios from '../../services/axios';


import { Container } from "../../styles/globalstyles";
import { Title, Paragraph } from './styled';
import { toast } from 'react-toastify';

export default function Login() {

  useEffect(()=> {
    async function getData(){
      const response = await axios.get('/users');
      console.log(response.data)
    }
    getData();
  },[]);


  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur .</Paragraph>
      <button>Enviar</button>
    </Container>
  );
}
