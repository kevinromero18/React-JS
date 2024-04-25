import cart from '../../assets/cart.png'
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div>
            <img src={cart} className='cart' alt="carrito de compras" />
            0
        </div>
    )
};

export default CartWidget;