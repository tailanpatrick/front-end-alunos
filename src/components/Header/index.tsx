import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaSignInAlt, FaUser, FaUserAlt } from 'react-icons/fa';


import { Nav } from './styled'

export default function Header() {
  return <Nav>
    <Link to="/"><FaHome size={24}/></Link>
    <Link to="/login"><FaUserAlt size={24}/></Link>
    <Link to="/asasd"><FaSignInAlt size={24}/></Link>
  </Nav>
}
