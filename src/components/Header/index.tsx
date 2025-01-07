import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";

import { Nav } from "./styled";

export default function Header() {

  const botaoClicado = useSelector(
    (state: any) => state.buttonRequest?.clicked
  );

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

      {botaoClicado ? "Clicado" : "Não clicado"}
    </Nav>
  );
}
