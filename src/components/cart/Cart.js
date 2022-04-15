import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import './Cart.css';
import { clear } from '@testing-library/user-event/dist/clear';

const Cart = ( ) => {
   
    const { cart, clearCart, removeItem, total } = useContext(CartContext);
    //console.log(cart)
    
    return(
        <div className='cart-container'>
            
            <h2 className='title-container'>Carrito</h2>


            {
            (cart.length === 0)
            
            &&
            
            <div style={{textAlign:'center'}}>
                <p>No hay productos en tu carrito</p>
                <Link to='/productos'>
                    <button className='btn-primary'>Ir a la tienda</button>
                </Link>
            </div>
            
            } 
            {                    
            cart.map((prod) =>(
                <div key={ prod.id } className='ctable-container'>
                     <div className='ctable-item'>
                        <img className='img-cart' src={`/${prod.image}`} alt={prod.image} />
                    </div>
                    <div className='ctable-item'>
                        <h3>Producto</h3>
                        <p>{prod.title}</p>
                     </div>
                     <div className='ctable-item'>
                        <h3>Precio</h3>
                        <p>$ {prod.price}</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Cantidad</h3>
                        <p>{prod.cantidad}</p>
                     </div>

                     <div className='ctable-item' onClick={removeItem}>
                        <h3>Eliminar</h3>
                        <HighlightOffIcon className="cart-icon" fontSize="large" onClick={() => removeItem(prod.id)}/>
                     </div>
                </div>
            ))
        }
            
            
        {
            (cart.length >= 1)
            
            &&

            <div className='total-container'>
                <h4 className='cart-total'> Total: ${total()} </h4>
                <button className="btn-primary" onClick={clearCart}>Vaciar carrito</button>
            </div>

        }     
        
        
        </div>
    )
}

export default Cart;