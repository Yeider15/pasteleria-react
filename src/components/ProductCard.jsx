import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-card.css';  

function ProductCard({ idProducto, nombre, precio, imgSrc, agregarAlCarrito }) {
  return (
    <article className="tarjeta-producto">
     
      <Link to={`/detalle_producto/${idProducto}`}>
        <img src={imgSrc} alt={nombre} className="imagen-producto" />
      </Link>
      <h3>{nombre}</h3>
      <p>${precio.toLocaleString()} CLP</p>
      <button className="boton-carrito" onClick={() => agregarAlCarrito(idProducto, nombre, precio)}>
        Agregar al carrito 🛒
      </button>
    </article>
  );
}

export default ProductCard;
