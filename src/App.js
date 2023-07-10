import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/menu/menu";
import Header from "./Componentes/header/header";
import Producto from "./Componentes/producto/producto";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarritoCompras from "./Componentes/carrito-compras/carrito-compras";
import Dashboard from "./Componentes/dashboard/dashboard";
import Categorias from "./Componentes/categorias/categorias";
import Contacto from "./Componentes/contacto/contacto";
import OfertasSemana from "./Componentes/oferta/oferta";

const App = () => {
  const [items, setItems] = useState([]);

  const addItems = (item) => {
    const array = [...items];
    array.push(item);
    setItems(array);
  };

  let isAutenticated = false;
  const token = localStorage.getItem("accessToken");
  isAutenticated = token && true;
  return (
    <Router>
      <Header cantidad={items.length} />
      <div id="root-container">
        <Menu isAuthenticated={isAutenticated} />
        <Routes>
          <Route path="/inicio" element={<Dashboard />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/oferta-semana" element={<OfertasSemana />} />
          <Route path="/productos" element={<Producto addItems={addItems} />} />
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
