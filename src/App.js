import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/menu/menu";
import Header from "./Componentes/header/header";
import Producto from "./Componentes/producto/producto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarritoCompras from "./Componentes/carrito-compras/carrito-compras";

const App = () => {
  const [items, setItems] = useState([]);
  let isAutenticated = false;
  const token = localStorage.getItem("accessToken");
  isAutenticated = token && true;
  return (
    <Router>
      <Header isAuthenticated={isAutenticated} />
      <div id="root-container">
        <Menu isAuthenticated={isAutenticated} />
        <Routes>
          <Route path="/producto" element={<Producto />} />
          <Route
            path="/carrito-compras"
            element={<CarritoCompras items={items} />}
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
