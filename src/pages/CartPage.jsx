import React, { useState, useEffect, useCallback } from 'react';
import CartItem from '../components/CartItem'; 
import '../styles/cart-page.css'; 

function CartPage() {
    
    const [carrito, setCarrito] = useState(() => {
        const storedCart = localStorage.getItem('carrito');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    
    useEffect(() => {
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

   
    const calcularTotal = useCallback(() => {
       
        return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    }, [carrito]);

    
    const eliminarProducto = (idProducto) => {
        const carritoActualizado = carrito.filter(item => item.id_producto !== idProducto);
        setCarrito(carritoActualizado);
    };

    const handleProcederPago = () => {
        alert("Procesando pago... (Funcionalidad pendiente)");
    };
    
    const total = calcularTotal();

    return (
       
        <div id="contenedor-carrito"> 
            <h1 id="titulo-carrito">Tu Carrito</h1>
            
           
            {carrito.length === 0 ? (
                <p className="carrito-vacio-mensaje">Tu carrito está vacío. ¡Añade unos deliciosos postres!</p>
            ) : (
                <>
                    <div id="productos-carrito">
                        {carrito.map(item => (
                            <CartItem
                                key={item.id_producto}
                                item={item}
                                onRemove={eliminarProducto}
                            />
                        ))}
                    </div>

                    <div id="resumen-carrito">
                        <h3>Resumen</h3>
                        <p>
                            <strong>Total: </strong>
                            <span id="total-carrito">${total.toLocaleString()} CLP</span>
                        </p>
                        <button 
                            id="boton-pago" 
                            onClick={handleProcederPago}
                        >
                            Proceder al pago
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;