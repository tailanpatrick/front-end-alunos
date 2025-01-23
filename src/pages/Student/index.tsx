import React, { useState } from "react";
import { Container } from "../../styles/globalstyles";
import { useParams } from "react-router-dom";
import { ContainerForm, Form } from "../Register/styled";



export default function StudentPage() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    weight: "",
    height: ""
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


  }

  return (
    <Container>
      <h1>{id ? 'Editar Aluno' : 'Novo Aluno'}</h1>

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
            {formData.name}
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
            {formData.email}
          </label>


          <>
            <label htmlFor="age">
              Idade:
              <input
                type="number"
                value={formData.age}
                onChange={handleChange}
                name="age"
                placeholder="Idade do Aluno"
              />
              {formData.age}
            </label>

            <label htmlFor="weight">
              Peso:
              <input
                type="text"
                value={formData.weight}
                onChange={handleChange}
                name="weight"
                placeholder="Peso do Aluno"
              />
              {formData.weight}
            </label>

            <label htmlFor="height">
              Altura:
              <input
                type="text"
                value={formData.height}
                onChange={handleChange}
                name="height"
                placeholder="Altura do Aluno"
              />
              {formData.height}
            </label>
          </>


          <button type="submit">
            {id ? "Salvar Alterações" : "Cadastrar Aluno"}
          </button>
        </Form>
      </ContainerForm>

    </Container>
  );
}
