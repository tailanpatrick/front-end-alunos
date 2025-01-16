import React, { useState } from "react";
import { isEmail } from 'validator'
import { toast } from "react-toastify";
import axios from '../../services/axios';
import { get } from 'lodash';
import { useNavigate } from "react-router-dom";

import { Container } from "../../styles/globalstyles";
import { ContainerForm, Form } from "./styled";


export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password:""
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let formErrors = false;

    if(formData.name.length < 4 || formData.name.length > 255){
      formErrors = true;
      toast.error('O Nome precisa no mínimo 4 caracteres');
    }

    if(!isEmail(formData.email)){
      formErrors = true;
      toast.error('Email inválido');
    }

    if(formData.password.length < 6 || formData.password.length > 50){
      formErrors = true;
      toast.error('A Senha precisa no mínimo 6 caracteres');
    }

    if (formData.password !== formData.re_password){
      formErrors = true;
      toast.error('Senhas não coincidem');
    }

    if (formErrors) return;

    try {
      const response = await axios.post('/users', {
        name: formData.name,
        email:formData.email,
        password: formData.password
      });

      toast.success('Cadastro realizado com sucesso.');
      navigate('/login');
    } catch (e) {
      const status = get(e, 'response.status',0);
      const errors = get(e, 'response.data.errors', []);

      if (Array.isArray(errors)) {
        errors.map((error: string) => toast.error(error));
      } else {
        toast.error("Erro desconhecido.");
      }
    }

  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <ContainerForm>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            name="name"
            placeholder="Seu Nome"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Seu email"
          />
        </label>


        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            placeholder="Crie sua senha"
          />
        </label>

        <label htmlFor="re_password">
          Repetir Senha:
          <input
            type="password"
            value={formData.re_password}
            onChange={handleChange}
            onBlur={handleChange}
            name="re_password"
            placeholder="Repita sua senha"
          />
        </label>

        <button type="submit">
          Criar minha conta
        </button>
      </Form>
      </ContainerForm>
    </Container>
  );
}
