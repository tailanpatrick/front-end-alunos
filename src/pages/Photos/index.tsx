import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from '../../services/axios';
import { get } from 'lodash';
import { Container } from "../../styles/globalstyles";
import Loading from './../../components/Loading/index';
import { Title, Form } from './styled';
import { toast } from "react-toastify";

export default function Photos({ match }: any) {
  const { id } = useParams()

  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/students/id/${id}`);

        setPhoto(get(data, 'photo.filePath', ''));
        setLoading(false);
      } catch (err) {
        toast.error('Erro ao obter a imagem');
        setLoading(false);
        navigate('/')
      }
    }
    getData()
  }, [id])

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const photo = e.target.files?.[0];

    if (photo) {
      const photoUrl = URL.createObjectURL(photo);
      console.log(photoUrl);
      setPhoto(photoUrl);

      const formData = new FormData();
      formData.append('student_id', String(id));
      formData.append('photo', photo);

      setLoading(true);
      try {
        axios.post("/photos", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        toast.success('Foto enviada com sucesso!')
      } catch (err) {
        const status = get(err, 'response.status', undefined);

        toast.error('Erro ao enviar a foto.');

        if(status === '401') {
          localStorage.removeItem("authData");
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={loading} />
      <Title>Photos</Title>

      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="Foto" /> : 'Selecionar'}
          <input type="file" id='photo' onChange={handleChange}/>
        </label>
      </Form>
    </Container>
  );
}
