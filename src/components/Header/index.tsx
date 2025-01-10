import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { buttonClickedSuccess } from '../../store/reducers/buttonSuccess';
import { RootState } from '../../store/store';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const botaoClicado = useSelector((state: RootState) => state.buttonSuccess.clicked);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/asasd">
        <FaSignInAlt size={24} />
      </Link>
      <button onClick={() => dispatch(buttonClickedSuccess())}>
        {botaoClicado ? 'Clicado' : 'Não clicado'}
      </button>
    </Nav>
  );
}
