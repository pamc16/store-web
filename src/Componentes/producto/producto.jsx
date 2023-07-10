import React, { useState } from "react";
import { motion } from "framer-motion";
import "./producto.css";

const Productos = ({ addItems }) => {
  const [filtro, setFiltro] = useState("todos");
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Producto 1",
      categoria: "ropa",
      precio: "$19.99",
      imagen: "ruta-imagen-producto-1.jpg",
    },
    {
      id: 2,
      nombre: "Producto 2",
      categoria: "electrodomésticos",
      precio: "$24.99",
      imagen: "ruta-imagen-producto-2.jpg",
    },
    {
      id: 3,
      nombre: "Producto 3",
      categoria: "accesorios",
      precio: "$14.99",
      imagen: "ruta-imagen-producto-3.jpg",
    },
    // Agregar más productos según sea necesario
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filtrarProductos = (categoria) => {
    setFiltro(categoria);
    setCurrentPage(1);
  };

  const productosFiltrados =
    filtro === "todos"
      ? productos
      : productos.filter((producto) => producto.categoria === filtro);

  const paginatedProducts = productosFiltrados.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(productosFiltrados.length / productsPerPage);

  return (
    <div className="productos-container">
      <h2 className="productos-title">Nuestros Productos</h2>
      <div className="productos-filtros">
        <button
          className={`filtro-btn ${filtro === "todos" ? "active" : ""}`}
          onClick={() => filtrarProductos("todos")}
        >
          Todos
        </button>
        <button
          className={`filtro-btn ${filtro === "ropa" ? "active" : ""}`}
          onClick={() => filtrarProductos("ropa")}
        >
          Ropa
        </button>
        <button
          className={`filtro-btn ${
            filtro === "electrodomésticos" ? "active" : ""
          }`}
          onClick={() => filtrarProductos("electrodomésticos")}
        >
          Electrodomésticos
        </button>
        <button
          className={`filtro-btn ${filtro === "accesorios" ? "active" : ""}`}
          onClick={() => filtrarProductos("accesorios")}
        >
          Accesorios
        </button>
      </div>
      <div className="productos-list">
        {paginatedProducts.map((producto) => (
          <motion.div
            key={producto.id}
            className="producto-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => addItems(producto)}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="producto-img"
            />
            <div className="producto-details">
              <h3 className="producto-name">{producto.nombre}</h3>
              <p className="producto-price">Precio: {producto.precio}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index + 1}
            className={`pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {index + 1}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Productos;
