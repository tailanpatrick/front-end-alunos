import React, { useEffect, useState } from "react";
import { isEmail, isInt, isFloat } from "validator";
import { toast } from "react-toastify";

import { Container } from "../../styles/globalstyles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContainerForm, Form } from "../Register/styled";
import { ProfilePicture, Title } from "./styled";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { get } from "lodash";
import { FaEdit, FaUserCircle } from "react-icons/fa";




export default function StudentPage() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    weight: "",
    height: ""
  });

  const [photo, setPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/students/id/${id}`);
        const photo = get(data, 'photo.filePath', '');

        setPhoto(photo);

        setFormData((prev) => ({
          ...prev,
          name: String(data.name) || "",
          surname: String(data.surname) || "",
          email: String(data.email) || "",
          age: String(data.age) || "",
          weight: String(data.weight) || "",
          height: String(data.height) || "",

        }));

      } catch (err) {
        const status = Number(get(err, 'response.status', 0))
        const errors = get(err, 'response.data.errors', [])
        if(status === 400) errors.map(error => toast.error(error))
        navigate('/')
      } finally {
        setLoading(false);
      }

    }

    getData();

  }, [id])


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

    if (formData.name.length < 3 || formData.name.length > 255) {
      toast.error('Nome precisa ter entre 3 e 255 caracteres')
      formErrors = true;
    }

    if (formData.surname.length < 3 || formData.surname.length > 255) {
      toast.error('Sobrenome precisa ter entre 3 e 255 caracteres')
      formErrors = true;
    }

    if (!isEmail(formData.email)) {
      toast.error('Email inválido')
      formErrors = true;
    }

    if (!isInt(formData.age) || Number(formData.age) <= 0) {
      toast.error('Idade inválida')
      formErrors = true;
    }

    if (!isFloat(formData.weight) || Number(formData.weight) <= 0) {
      toast.error('Peso inválido')
      formErrors = true;
    }

    if (!isFloat(formData.height) || Number(formData.height) <= 0) {
      toast.error('Altura inválida')
      formErrors = true;
    }

    if(formErrors) return;

    try {
      setLoading(true);

      if(id){
        await axios.put(`/students/${id}`, {
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          age: formData.age,
          height: formData.height,
          weight: formData.weight
        });
        toast.success('Aluno(a) editado com sucesso!')
      } else {
        await axios.post(`/students/`, {
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          age: formData.age,
          height: formData.height,
          weight: formData.weight
        });
        toast.success('Aluno(a) criado com sucesso!')
        navigate('/')
      }
    } catch (err) {
      const status = Number(get(err, 'response.status', 0))
        const errors = get(err, 'response.data.errors', [])
        if(errors.length > 0) errors.map(error => toast.error(error))
        else toast.error('Erro desconhecido.')
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={loading} />
      <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>

      {id && (
        <ProfilePicture>
          {photo ? (
            <img src={photo} alt={`Foto de ${formData.name}`} />
          ) : (
            <FaUserCircle size={180}/>
          )}

          <Link to={`/photos/${id}`}>
            <FaEdit size={28}/>
          </Link>
        </ProfilePicture>
      )}

      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Nome do Aluno"
            />
          </label>

          <label htmlFor="surname">
            Sobrenome:
            <input
              type="text"
              value={formData.surname}
              onChange={handleChange}
              name="surname"
              placeholder="Sobrenome do Aluno"
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email do Aluno"
            />

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

            </label>

            <label htmlFor="weight">
              Peso:
              <input
                type="number"
                step="0.01"
                value={formData.weight}
                onChange={handleChange}
                name="weight"
                placeholder="Peso do Aluno"
              />

            </label>

            <label htmlFor="height">
              Altura:
              <input
                type="number"
                step="0.01"
                value={formData.height}
                onChange={handleChange}
                name="height"
                placeholder="Altura do Aluno"
              />

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
