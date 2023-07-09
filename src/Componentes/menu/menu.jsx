import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = ({ userName, isAuthenticated, onLogout }) => {
  return (
    <header className="menu">
      <div className="menu-header">
        <h1>Nombre de la Tienda</h1>
        <div className="user-name">{userName}</div>
        <NavLink to="/carrito" activeClassName="active">
          <FaShoppingCart />
        </NavLink>
      </div>
      <nav className="menu-nav">
        <ul className="menu-list">
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
            {isAuthenticated ? (
              <button onClick={onLogout}>Cerrar sesión</button>
            ) : (
              <Link to="http://localhost:3000/login">Iniciar sesión</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
