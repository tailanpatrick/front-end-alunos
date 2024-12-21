import React from "react";

import { Container } from "../../styles/globalstyles";
import { Title, Paragraph } from './styled'

export default function Login() {
  return (
    <Container>
      <Title isRed={true}>
        Login
        <small>Oie</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur .</Paragraph>
    </Container>
  );
}
