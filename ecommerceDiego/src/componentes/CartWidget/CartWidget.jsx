import cart from '../../assets/react.svg'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/cart')}>
        <img src={cart} className='btn btn-white'/>
            {totalQuantity}
        </button>
    )
}

export default CartWidget