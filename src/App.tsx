import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Globalstyles from "./styles/globalstyles";
import Header from "./components/Header/index";
import { AppRoutes } from './routes/index'


function App() {
  return (
    <BrowserRouter>
      <Globalstyles/>
      <Header />
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
