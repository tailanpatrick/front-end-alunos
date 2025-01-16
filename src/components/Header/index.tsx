import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { actionLoginSuccess } from '../../store/reducers/loginSuccess';
import { RootState } from '../../store/store';
import { Nav } from './styled';

export default function Header() {

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
