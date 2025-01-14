import React from "react";
import { Routes, Route } from "react-router-dom";

import MyRoute from './MyRoute'; // Importando MyRoute

import Login from "../pages/Login";
import Register from "../pages/Register";
import Student from "../pages/Student";
import Students from "../pages/Students";
import Photos from "../pages/Photos";
import Page404 from "../pages/Page404";

export const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<MyRoute Component={Students} isClosed={false} />} />

      <Route path="/student/:id/edit" element={<MyRoute Component={Student} isClosed={true} />} />

      <Route path="/student/" element={<MyRoute Component={Student} isClosed={true} />} />

      <Route path="/photos/:id" element={<MyRoute Component={Photos} isClosed={true} />} />

      <Route path="/register" element={<MyRoute Component={Register} isClosed={false} />} />

      <Route path="/login" element={<MyRoute Component={Login} isClosed={false} />} />

      <Route path="*" element={<MyRoute Component={Page404} isClosed={false} />} />

    </Routes>
  );
};
