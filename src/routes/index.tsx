import React from "react";
import { Routes, Route } from "react-router-dom";
import MyRoute from './MyRoute'; // Importando MyRoute
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MyRoute Component={Login} isClosed={false} />} />
      <Route path="*" element={<MyRoute Component={Page404} isClosed={false} />} />
    </Routes>
  );
};
