import React from "react";
import { Routes, Route } from "react-router-dom";

import MyRoute from "./MyRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Student from "../pages/Student";
import Students from "../pages/Students";
import Photos from "../pages/Photos";
import Page404 from "../pages/Page404";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MyRoute Component={Students} isClosed />} />
      <Route
        path="/student/:id/edit"
        element={<MyRoute Component={Student} isClosed />}
      />
      <Route path="/student/" element={<MyRoute Component={Student} isClosed />} />
      <Route path="/photos/:id" element={<MyRoute Component={Photos} isClosed />} />
      <Route path="/register" element={<MyRoute Component={Register} />} />
      <Route path="/login" element={<MyRoute Component={Login} />} />
      <Route path="*" element={<MyRoute Component={Page404} />} />
    </Routes>
  );
};
