import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/product-page.css";

function ProductPage() {
  const [productos, setProductos] = useState([]);

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito");
    return guardado ? JSON.parse(guardado) : [];
  });

 
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/productos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Productos cargados desde backend:", data);
        setProductos(data);
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const añadirAlCarrito = (idProducto, nombre, precio) => {
    const carritoActualizado = [...carrito];
    const existente = carritoActualizado.find(
      (item) => item.id_producto === idProducto
    );

    if (existente) {
      existente.cantidad++;
    } else {
      carritoActualizado.push({
        id_producto: idProducto,
        nombre,
        precio,
        cantidad: 1,
      });
    }

    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    alert(`Se ha añadido 1 ${nombre} al carrito.`);
  };

  return (
    <div id="pagina-productos">
      <h1 id="titulo-productos">PRODUCTOS</h1>

      <div id="cuadricula-productos">
        {productos.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map((p) => (
            <ProductCard
              key={p.id}
              idProducto={p.id}
              nombre={p.nombre}
              precio={p.precio}
              imgSrc={`/assets/img/${p.imagen_url}`} 
              agregarAlCarrito={añadirAlCarrito}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductPage;
