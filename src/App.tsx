import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Globalstyles from "./styles/globalstyles";
import Header from "./components/Header/index";
import { AppRoutes } from './routes/index'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes/>
      <Globalstyles/>
      <ToastContainer autoClose={ 3000 } className="toast-container"/>
    </BrowserRouter>
  );
}

export default App;
