import React, { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import axios from '../../services/axios';
import { get } from 'lodash';
import { Container } from "../../styles/globalstyles";
import Loading from './../../components/Loading/index';
import { Title, Form } from './styled';
import { toast } from "react-toastify";
import { Student } from "../../types/Student";

export default function Photos({ match }: any) {
  const { id } = useParams()

  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoInfo, setPhotoInfo] = useState<any>();

  const navigate = useNavigate()

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/students/id/${id}`);

        setStudent(data.name+ ' '+ data.surname)
        setPhoto(get(data, 'photo.filePath', ''));
        setPhotoInfo(get(data, 'photo', ''));

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

      setPhoto(photoUrl);

      const formData = new FormData();
      formData.append('student_id', String(id));
      formData.append('photo', photo);

      setLoading(true);
      try {
        const { data } = await axios.post("/photos", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });

        setPhotoInfo(get(data, 'photo.photocreated', null));

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

  const handleDeletePhoto = async () => {
    setLoading(true);
    try {
      await axios.delete(`/photos/${photoInfo?.id}`)

      setPhoto('');
      setPhotoInfo(null);
      toast.success('Foto deletada com sucesso!')
    } catch (err) {

      toast.error('Erro ao deletar foto.');

    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={loading} />
      <Title>Foto de {student}</Title>

      <Form>
        <label htmlFor="photo">
          {photo ? <img src={photo} alt="Foto" /> : 'Selecionar'}
          <input type="file" id='photo' onChange={handleChange}/>
        </label>

        {photo && <button type="button" onClick={handleDeletePhoto}>Excluir Foto</button> }
      </Form>
    </Container>
  );
}
