import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import { toast } from "react-toastify";
import axios from "../../services/axios";
import { Container } from "../../styles/globalstyles";
import { ContainerForm, Form } from "./styled";
import Loading from "../../components/Loading";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  // Acessa os dados de autenticação do localStorage
  const authData = JSON.parse(localStorage.getItem("authData") || "{}");
  const { user } = authData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const isEditMode = !!user?.id;

  useEffect(() => {
    if (isEditMode && user && (formData.name !== user.name || formData.email !== user.email)) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        re_password: "",
      });
    } else if (!isEditMode && (formData.name || formData.email)) {
      setFormData({
        name: "",
        email: "",
        password: "",
        re_password: "",
      });
    }
  }, [user, isEditMode, formData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    let formErrors = false;

    // Validação de dados
    if (formData.name.length < 4 || formData.name.length > 255) {
      formErrors = true;
      toast.error("O Nome precisa no mínimo 4 caracteres");
    }

    if (!isEmail(formData.email)) {
      formErrors = true;
      toast.error("Email inválido");
    }

    if (!isEditMode && (formData.password.length < 6 || formData.password.length > 50)) {
      formErrors = true;
      toast.error("A Senha precisa no mínimo 6 caracteres");
    }

    if (formData.password !== formData.re_password) {
      formErrors = true;
      toast.error("Senhas não coincidem");
    }

    if (formErrors) {
      setLoading(false);
      return;
    }

    try {
      // Se for edição, faz a atualização do usuário
      if (isEditMode) {
        await axios.put(`/users/${user.id}`, {
          name: formData.name,
          email: formData.email,
          password: formData.password || undefined,
        });
        toast.success("Usuário atualizado com sucesso.");
      } else {
        // Se for criação de novo usuário
        await axios.post("/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        toast.success("Cadastro realizado com sucesso.");
        navigate("/login");
      }
    } catch (e: any) {
      const errors = e.response?.data?.errors || [];
      errors.map((error: string) => toast.error(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={loading} />
      <h1>{isEditMode ? "Editar Perfil" : "Crie sua conta"}</h1>

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


          <>
            <label htmlFor="password">
              Senha:
              <input
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
                placeholder={!isEditMode ? 'Crie sua senha' : 'Edite sua senha'}
              />
            </label>

            <label htmlFor="re_password">
              Repetir Senha:
              <input
                type="password"
                value={formData.re_password}
                onChange={handleChange}
                name="re_password"
                placeholder="Repita sua senha"
              />
            </label>
          </>


          <button type="submit">
            {isEditMode ? "Salvar Alterações" : "Criar minha conta"}
          </button>
        </Form>
      </ContainerForm>
    </Container>
  );
}
