import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const { cart } = useCart()

    return (
        <div>
            <h1 className="orden">SE AGREGO AL CARRITO EL PRODUCTO:</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3 className="orden">{prod.name} - ${prod.price}</h3>

                            </div>
                        )
                    })
                }
            </div>

            <Link to='/checkout' className="orden">Confirmar y generar orden de compra</Link>
        </div>
    )
}

export default Cart