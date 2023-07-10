import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import "./header.css";

const Header = ({ cantidad }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-link">
            MyStore
          </Link>
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/categorias" className="nav-link">
              Categorías
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/oferta-semana" className="nav-link">
              Ofertas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
        <div className="cart">
          <Link to="/carrito-compras" className="cart-icon">
            <FiShoppingCart />
          </Link>
          <span className="cart-count">{cantidad}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
