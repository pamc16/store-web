import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className="header">
      <ul className="header-list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/producto" activeClassName="active">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrito-compras" activeClassName="active">
            <FaShoppingCart />
          </NavLink>
        </li>
        <li>
          {isAuthenticated ? (
            <button onClick={onLogout}>Cerrar sesión</button>
          ) : (
            <Link to="http://localhost:3000/login">Iniciar sesión</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
