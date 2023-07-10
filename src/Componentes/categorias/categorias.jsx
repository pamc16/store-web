import React from "react";
import "./categorias.css";

const Categorias = () => {
  const categorias = [
    {
      id: 1,
      nombre: "Electrónica",
      subcategorias: ["Televisores", "Smartphones", "Laptops"],
    },
    {
      id: 2,
      nombre: "Ropa",
      subcategorias: ["Hombres", "Mujeres", "Niños"],
    },
    {
      id: 3,
      nombre: "Hogar",
      subcategorias: ["Muebles", "Decoración", "Electrodomésticos"],
    },
    {
      id: 4,
      nombre: "Deportes",
      subcategorias: ["Fútbol", "Baloncesto", "Natación"],
    },
  ];

  return (
    <div className="categorias-container">
      <h2 className="categorias-title">Categorías</h2>
      <ul className="categorias-list">
        {categorias.map((categoria) => (
          <li key={categoria.id} className="categorias-item">
            <a href={`/categorias/${categoria.id}`} className="categorias-link">
              {categoria.nombre}
            </a>
            {categoria.subcategorias && (
              <ul className="subcategorias-list">
                {categoria.subcategorias.map((subcategoria, index) => (
                  <li
                    key={index}
                    className="subcategorias-item"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={`/categorias/${categoria.id}/${index}`}
                      className="subcategorias-link"
                    >
                      {subcategoria}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
