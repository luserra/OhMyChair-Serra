import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './Cart.css';

const Cart = ( ) => {
   
    const { cart, clearCart, removeItem } = useContext(CartContext);

    return(
        <div className='cart-container'>
            
            <h2 className='title-container'>Carrito</h2>
            
                <div className='ctable-container'>
                    <div className='ctable-item'>
                        <img className='img-cart' src='assets/images/silla-tossberd.jpg' alt='silla 1' />
                    </div>

                     <div className='ctable-item'>
                        <h3>Producto</h3>
                        <p>Silla 1</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Precio</h3>
                        <p>$45000</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Cantidad</h3>
                        <p>2</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Subtotal</h3>
                        <p>$90000</p>
                     </div>

                     <div className='ctable-item' onClick={removeItem}>
                        <h3>Eliminar</h3>
                        <HighlightOffIcon className="cart-icon" fontSize="large" />
                     </div>
                </div>
            <button className='checkout btn-primary' onClick={clearCart}>Vaciar carrito</button>
            <button className='checkout btn-primary'>Finalizar compra</button>    
        </div>
    )
}

export default Cart;