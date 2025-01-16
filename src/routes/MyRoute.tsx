import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface MyRouteProps {
  Component: React.ComponentType<any>;
  isClosed?: boolean;
}

const MyRoute: React.FC<MyRouteProps> = ({ Component, isClosed = false }) => {
  const location = useLocation();

  const authData = localStorage.getItem("authData");
  const isLoggedIn = !!authData;

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          prevPath: location.pathname,
          message: "Você precisa estar logado para acessar esta página.",
        }}
        replace
      />
    );
  }
  return <Component />;
};

export default MyRoute;
