import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = ({ userName, isAuthenticated, onLogout }) => {
  return (
    <nav className="dashboard-sidebar">
      <h2 className="dashboard-logo">Mi Tienda</h2>
      <ul className="dashboard-menu">
        <li className="dashboard-menu-item">
          <NavLink exact to="/inicio" activeClassName="active">
            <i className="fas fa-chart-line"></i>
            Dashboard
          </NavLink>
        </li>
        {/* <li className="dashboard-menu-item">
          <i className="fas fa-shopping-cart"></i>
          Ventas
        </li> */}
        <li className="dashboard-menu-item">
          <NavLink to="/producto" activeClassName="active">
            <i className="fas fa-box"></i>
            Productos
          </NavLink>
        </li>
        <li className="dashboard-menu-item">
          <NavLink to="/contacto" activeClassName="active">
            <i className="fas fa-address-card"></i>
            Contacto
          </NavLink>
        </li>
        {/* <li className="dashboard-menu-item">
          <i className="fas fa-users"></i>
          Clientes
        </li>
        <li className="dashboard-menu-item">
          <i className="fas fa-cog"></i>
          Configuración
        </li> */}
      </ul>
      <div className="dashboard-logout">
        <i className="fas fa-sign-out-alt"></i>
        Cerrar sesión
      </div>
    </nav>
  );
};

export default Menu;
