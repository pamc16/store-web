import React, { useState, useEffect } from "react";
import axios from "axios";
import "./producto.css";
import AgregarProductoModal from "./agregar-producto/agregar-producto";
import gorra from "../../asset/img/gorra.jpg";

const Producto = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3003/productos");
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="panel-title">
        <h1>Tienda Online</h1>
        <button className="corner-button" onClick={handleOpenModal}>
          Agregar producto
        </button>
      </div>

      <h2>Productos</h2>
      <div className="productos">
        {products.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={gorra} alt={producto.nombre} />
            <div className="card-content">
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
              <button>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <AgregarProductoModal
        show={showModal}
        handleClose={handleCloseModal}
        fetchProducts={fetchProducts}
      />
    </div>
  );
};

export default Producto;
