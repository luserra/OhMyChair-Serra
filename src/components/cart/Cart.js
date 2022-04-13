import { useContext } from 'react';
//import CartContext from '../../context/CartContext';
const Cart = ( ) => {
   
    //const { cart } = useContext(CartContext);

    return(
        <>
            <h2 className='title-detail' style={{margin:'5rem', textTransform:'uppercase'}}>Carrito</h2>
            
                 <div>
                     <h3 style={{margin:'3rem'}}>TOTAL</h3>
                        {/* <p>Productos agregados al carrito: {cart}</p> */}
                </div>
        </>
    )
}

export default Cart;