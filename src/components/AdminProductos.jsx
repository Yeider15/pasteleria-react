import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/admin-productos-comp.css";

const AdminProductos = () => {

    const token = localStorage.getItem("token");

    const [productos, setProductos] = useState([]);
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen_url: ""
    });

    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/productos", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => setProductos(res.data))
            .catch(err => console.log("ERROR LISTAR:", err));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const crearProducto = () => {
        axios.post("http://localhost:8080/api/v1/productos", form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.reload())
            .catch(err => console.log("ERROR CREAR:", err));
    };

   
    const actualizarProducto = (id) => {

       
        if (!productoSeleccionado) {
            alert("Primero selecciona un producto para actualizar.");
            return;
        }

        axios.put(`http://localhost:8080/api/v1/productos/${id}`, form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.reload())
            .catch(err => console.log("ERROR ACTUALIZAR:", err));
    };

    
    const editar = (producto) => {
        setProductoSeleccionado(producto.id);
        setForm({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            stock: producto.stock,
            imagen_url: producto.imagen_url
        });
    };

    const eliminarProducto = (id) => {
        axios.delete(`http://localhost:8080/api/v1/productos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => window.location.reload())
            .catch(err => console.log("ERROR ELIMINAR:", err));
    };

    return (
        <div className="acme-container">

            <h1>Panel de Administracion</h1>
            <h2> Productos</h2>

            
            <div className="acme-form">
                <input
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />
                <input
                    name="descripcion"
                    placeholder="Descripción"
                    value={form.descripcion}
                    onChange={handleChange}
                />
                <input
                    name="precio"
                    placeholder="Precio"
                    type="number"
                    value={form.precio}
                    onChange={handleChange}
                />
                <input
                    name="stock"
                    placeholder="Stock"
                    type="number"
                    value={form.stock}
                    onChange={handleChange}
                />
                <input
                    name="imagen_url"
                    placeholder="URL de imagen"
                    value={form.imagen_url}
                    onChange={handleChange}
                />

                <button className="acme-btn-create" onClick={crearProducto}>
                    Crear Producto
                </button>

                {productoSeleccionado && (
                    <button
                        className="acme-btn-create"
                        onClick={() => actualizarProducto(productoSeleccionado)}
                    >
                        Guardar Cambios
                    </button>
                )}
            </div>

         
            <h2>Listado de productos</h2>

            {productos.map(p => (
                <div key={p.id} className="product-item">
                    <span>
                        {p.nombre} - ${p.precio} - Stock: {p.stock}
                    </span>

                    <div>
                        <button className="acme-btn" onClick={() => editar(p)}>
                            Actualizar
                        </button>

                        <button className="acme-btn" onClick={() => eliminarProducto(p.id)}>
                            Eliminar
                        </button>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default AdminProductos;
