import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import { Student } from "../../types/Student";
import { get } from "lodash";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from "react-icons/fa";
import { Container } from "../../styles/globalstyles";
import { primaryColor } from "../../config/colors";
import { ProfilePicture, StudentActions, StudentContainer, NewStudent } from "./styled";
import Loading from "../../components/Loading";


export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/students");
        const studentsWithExclamation = response.data.map((student: Student) => ({
          ...student,
          showExclamation: false,
        }));
        setStudents(studentsWithExclamation);
        setError(null);
      } catch (err: any) {
        const status = Number(get(err, 'response.status', 0))
                const errors = get(err, 'response.data.errors', [])
                if(status === 400) errors.map((error: any) => toast.error(error))
        setError("Não foi possível carregar a lista de estudantes."+ errors[0] + " tente refazer o Login");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);


  const handleDeleteAsk = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, showExclamation: true } : student
      )
    );

    setTimeout(() => {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === id ? { ...student, showExclamation: false } : student
        )
      );
    }, 3000);
  };


  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/students/${id}`);
      const updatedStudents = students.filter((student) => student.id !== id);
      setStudents(updatedStudents);
      toast.success("Aluno deletado com sucesso!");
    } catch (err) {
      const errors = get(err, "response.data.errors", []);
      errors.forEach((error) => toast.error(error));
    }
  };

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
      <Loading isLoading={loading} />
      <h1>Alunos</h1>

      <NewStudent to="/student/">Novo Aluno +</NewStudent>

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

            <span className="student-name">{student.name} {student.surname}</span>

            <span className="student-email">{student.email}</span>

            <StudentActions>
              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={19} />
              </Link>
              {!student.showExclamation &&
                <Link
                  onClick={(e) => handleDeleteAsk(e, student.id)}
                  to={`/student/${student.id}/delete`}
                >
                  <FaWindowClose size={20} />
                </Link>}
            </StudentActions>
            {student.showExclamation && (
              <FaExclamation
                size={20}
                style={{ display: "block", cursor: "pointer" }}
                onClick={() => handleDelete(student.id)}
                color={`${primaryColor}`}
                title={`Clique para excluir ${student.name} ${student.surname}`}
              />
            )}
          </div>
        ))}
      </StudentContainer>
    </Container>
  );
}
