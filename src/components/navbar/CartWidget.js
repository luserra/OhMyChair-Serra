import { useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './CartWidget.css'
import CartContext from '../../context/CartContext';


function CartWidget() {

  const { cart } = useContext(CartContext);

    return (
        <>
        <div className='cart-widget'>     
            <AddShoppingCartIcon className="cart-icon" fontSize="medium" />
              <p>{cart.length}</p>  
            
            {/* <FavoriteBorderIcon className="cart-icon" fontSize="medium"></FavoriteBorderIcon> */}             
        </div>
         
      </>
    );
  }
  
  export default CartWidget;
  