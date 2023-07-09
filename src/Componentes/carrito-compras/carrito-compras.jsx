import React from "react";
import "./carrito-compras.css"; // Archivo CSS personalizado

const CarritoCompras = ({ items }) => {
  return (
    <div className="carrito-compras-container">
      <h2 className="carrito-compras-title">Carrito de compras</h2>
      <div className="carrito-compras-content">
        {items.length === 0 ? (
          <p>No hay items en el carrito</p>
        ) : (
          <ul className="carrito-compras-list">
            {items.map((item) => (
              <li key={item.id} className="carrito-compras-item">
                <span className="carrito-compras-item-nombre">
                  {item.nombre}
                </span>
                <span className="carrito-compras-item-precio">
                  ${item.precio}
                </span>
              </li>
            ))}
          </ul>
        )}
        <button className="carrito-compras-button">Realizar compra</button>
      </div>
    </div>
  );
};

export default CarritoCompras;
