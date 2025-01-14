import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Student } from "../../types/Student";
import { get } from "lodash";
import { Link } from "react-router-dom";

import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
import { Container } from "../../styles/globalstyles";
import { ProfilePicture, StudentActions, StudentContainer } from "./styled";

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/students");
        setStudents(response.data);
        setError(null);
      } catch (err: any) {
        console.error("Erro ao buscar os estudantes", err);
        setError("Não foi possível carregar a lista de estudantes");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <h1>Erro</h1>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Alunos</h1>

      <StudentContainer>
        {students.map((student) => (
          <div key={student.id}>
            {get(student, "photo.filePath", false) ? (
              <ProfilePicture>
                <img
                  src={student.photo?.filePath}
                  alt={student.photo?.fileName}
                />
              </ProfilePicture>
            ) : (
              <FaUserCircle size={36} />
            )}

            <span>{student.name}</span>
            <span>{student.email}</span>

            <StudentActions>
              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={19} />
              </Link>

              <Link to={`/student/${student.id}/delete`}>
                <FaWindowClose size={20} />
              </Link>
            </StudentActions>
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
