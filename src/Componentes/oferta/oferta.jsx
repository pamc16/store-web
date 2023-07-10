import React from "react";
import { motion } from "framer-motion";
import "./oferta.css";

const OfertasSemana = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      precio: "$19.99",
      imagen: "ruta-imagen-oferta-1.jpg",
    },
    {
      id: 2,
      nombre: "Producto 2",
      precio: "$24.99",
      imagen: "ruta-imagen-oferta-2.jpg",
    },
    {
      id: 3,
      nombre: "Producto 3",
      precio: "$14.99",
      imagen: "ruta-imagen-oferta-3.jpg",
    },
  ];

  return (
    <div className="ofertas-semana-container">
      <h2 className="ofertas-semana-title">Ofertas de la Semana</h2>
      <div className="ofertas-semana-list">
        {productos.map((producto) => (
          <motion.div
            key={producto.id}
            className="ofertas-semana-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="ofertas-semana-img"
            />
            <div className="ofertas-semana-details">
              <h3 className="ofertas-semana-name">{producto.nombre}</h3>
              <p className="ofertas-semana-price">Precio: {producto.precio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfertasSemana;
