import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface MyRouteProps {
  Component: React.ComponentType<any>;
  isClosed?: boolean;
  isAuthenticated?: boolean;
}

const MyRoute: React.FC<MyRouteProps> = ({
  Component,
  isClosed = false,
  isAuthenticated = false,
}) => {
  const location = useLocation();

  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          prevPath: location.pathname,
          message: "Você precisa estar logado para acessar esta página.",
        }}
      />
    );
  }

  return <Component />;
};

export default MyRoute;
