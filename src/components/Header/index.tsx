import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  const authData = JSON.parse(localStorage.getItem("authData") || "{}");
  const { user } = authData;
  const navigate = useNavigate();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    localStorage.removeItem("authData");
    navigate('/login')
  }

  return (
    <Nav>
      <Link to="/" title="Página Inicial">
        <FaHome size={24}/>
      </Link>
      <Link to="/register" title={user?.id ? 'Editar dados de usuário' : 'Fazer registro de usuário'}>
        <FaUserAlt size={24} />
      </Link>

      {user?.id ? (
        <Link onClick={handleLogout} to="/logout" title={`Desconectar de ${user?.name}`} >
        <FaPowerOff size={24} />
      </Link>
      ):(
        <Link to="/login" title="Fazer Login">
        <FaSignInAlt size={24} />
      </Link>
      )}

      {user?.id && <FaCircle size={24} color="#66ff33" title={`Logado como ${user?.name}`} style={{cursor: 'pointer'}}/>}

    </Nav>
  );
}
