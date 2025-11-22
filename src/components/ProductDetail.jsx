import React from "react";

function ProductDetail({ producto, añadirAlCarrito, mensajeConfirmacion }) {
  const imagenesSecundarias = [
    producto.imgSrc2,
    producto.imgSrc3,
    producto.imgSrc4,
  ].filter((img) => img);

  return (
    <div className="detalle-producto">
      <div className="imagenes-producto">
        <img
          src={producto.imgSrc}
          alt={producto.nombre}
          className="imagen-principal"
        />
        <div className="imagenes-adicionales">
          {imagenesSecundarias.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagen adicional ${index + 1} de ${producto.nombre}`}
              className="imagen-adicional"
            />
          ))}
        </div>
      </div>
      <div className="informacion-producto">
        <h1 className="titulo-producto">{producto.nombre}</h1>
        <p className="precio">${producto.precio.toLocaleString()} CLP</p>
        <div className="separador"></div>
        <p className="descripcion-producto">{producto.descripcion}</p>
        <div className="separador"></div>

        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          min="1"
          defaultValue="1"
          id="cantidad"
          className="cantidad-input"
        />
        <br />

        <button
          className="boton-agregar"
          onClick={() =>
            añadirAlCarrito(producto.id, producto.nombre, producto.precio)
          }
        >
          Añadir al carrito 🛒
        </button>
        <br />

        <span
          id="ms-confirm-producto"
          style={{
            display: mensajeConfirmacion ? "block" : "none",
            color: "green",
            marginTop: "10px",
          }}
        >
          {mensajeConfirmacion}
        </span>
        <div className="separador"></div>
      </div>
    </div>
  );
}

export default ProductDetail;
