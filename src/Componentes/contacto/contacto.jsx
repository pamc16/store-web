import React from "react";
import "./contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div className="contacto-container">
      <div className="contacto-content">
        <h2 className="contacto-title">Contacto</h2>
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="contacto-form-group">
            <label htmlFor="nombre" className="contacto-label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              className="contacto-input"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="contacto-form-group">
            <label htmlFor="email" className="contacto-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="contacto-input"
              placeholder="Email"
              required
            />
          </div>
          <div className="contacto-form-group">
            <label htmlFor="mensaje" className="contacto-label">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              className="contacto-input contacto-textarea"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
          </div>
          <button type="submit" className="contacto-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
