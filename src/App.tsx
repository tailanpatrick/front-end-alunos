import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

import store from './store/store'
import Globalstyles from "./styles/globalstyles";
import Header from "./components/Header/index";
import { AppRoutes } from "./routes/index";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Globalstyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
