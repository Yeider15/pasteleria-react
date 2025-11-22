import React from 'react';

function CartItem({ item, onRemove }) {
    return (
        <div className="item-carrito">
            <h5 className="item-nombre">
                {item.nombre} 
                <span className="item-detalle">
                    - ${item.precio.toLocaleString()} CLP x {item.cantidad}
                </span>
            </h5>
            <button 
                className="boton-eliminar"
                onClick={() => onRemove(item.id_producto)}
            >
                Eliminar
            </button>
        </div>
    );
}

export default CartItem;