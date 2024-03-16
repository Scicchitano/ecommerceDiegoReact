import React from 'react';
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const { cart, clearCart, removeItem } = useCart();
    
    // Calcular el total de la compra
    const total = cart.reduce((acc, prod) => acc + prod.price, 0);

    return (
        <div>
            <h1 className="orden">SE AGREGO AL CARRITO EL PRODUCTO:</h1>
            <div>
                {cart.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <div>
                        {cart.map(prod => (
                            <div key={prod.id}>
                                <h3 className="orden">{prod.name} - ${prod.price}</h3>
                                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        ))}
                        <p>Total de la compra: ${total}</p>
                        <button onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                )}
            </div>
            <Link to='/checkout' className="orden">Confirmar y generar orden de compra</Link>
        </div>
    );
};

export default Cart;
