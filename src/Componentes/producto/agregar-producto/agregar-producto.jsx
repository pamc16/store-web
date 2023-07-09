import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./agregar-producto.css";
import axios from "axios";
import { toast } from "react-toastify";

const AgregarProductoModal = ({ show, handleClose, fetchProducts }) => {
  const [newProduct, setNewProduct] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
  });
  const [imagenBlob, setImagenBlob] = useState(null);
  const [precio, setPrecio] = useState(0);
  const [cantidad, setCantidad] = useState(0);

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: file.type });
        console.log(blob);
        setImagenBlob(blob);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleAddProduct = async () => {
    try {
      await axios.post("http://localhost:3001/productos", {
        ...newProduct,
        imagen: imagenBlob,
        precio,
        cantidad_disponible: cantidad,
      });
      fetchProducts();
      setNewProduct({
        nombre: "",
        descripcion: "",
        categoria: "",
      });
      setCantidad(0);
      setPrecio();
      setImagenBlob(null);
      toast.success("Producto agregado correctamente", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.error("Error al agregar el producto:", error);
      toast.error("Producto agregado correctamente", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Ingrese el nombre"
              value={newProduct.nombre}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="nombre">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              type="text"
              name="categoria"
              placeholder="Ingrese categoria"
              value={newProduct.categoria}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="precio">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              name="precio"
              placeholder="Ingrese precio"
              min="0"
              step="0.01"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              min="0"
              name="cantidad_disponible"
              placeholder="Ingrese cantidad"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="descripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name="descripcion"
              rows={3}
              value={newProduct.descripcion}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </Form.Group>
          <Form.Group controlId="descripcion">
            <Form.Label htmlFor="imagen">Imagen:</Form.Label>
            <Form.Control
              type="file"
              name="imagen"
              onChange={handleImagenChange}
              accept="image/*"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="button-submit">
            Agregar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AgregarProductoModal;
