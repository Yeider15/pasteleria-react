import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import "../styles/product-detail-page.css";
import axios from "axios";

function ProductDetailPage() {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState(null);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");

  
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/productos/${idProducto}`)
      .then((res) => setProducto(res.data))
      .catch(() => setProducto(null));
  }, [idProducto]);

  
  const actualizarCarrito = useCallback(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    console.log(`Total del carrito: $${total.toFixed(2)} CLP`);
  }, []);

  useEffect(() => {
    actualizarCarrito();
  }, [actualizarCarrito]);

 
  const añadirAlCarrito = () => {
    const inputCantidad = document.getElementById("cantidad");
    const cantidadSeleccionada = inputCantidad
      ? parseInt(inputCantidad.value)
      : 1;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const existente = carrito.find((item) => item.id_producto === producto.id);

    if (existente) {
      existente.cantidad += cantidadSeleccionada;
    } else {
      carrito.push({
        id_producto: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidadSeleccionada,
      });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    setMensajeConfirmacion(
      `Se ha añadido ${cantidadSeleccionada} ${producto.nombre} al carrito.`
    );
    setTimeout(() => setMensajeConfirmacion(""), 3000);

    actualizarCarrito();
  };

  return (
    <div>
      <div id="contenedor-detalle-producto">
        {producto ? (
          <ProductDetail
            producto={{
              ...producto,
              imgSrc: `/assets/img/${producto.imagen_url}`, // ← IMPORTANTE
            }}
            añadirAlCarrito={añadirAlCarrito}
            mensajeConfirmacion={mensajeConfirmacion}
          />
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
