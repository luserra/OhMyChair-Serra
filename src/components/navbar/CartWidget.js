import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './CartWidget.css'

function CartWidget() {

    return (
        <>
        <div>     
            <AddShoppingCartIcon className="cart-icon" fontSize="medium"></AddShoppingCartIcon>
            <FavoriteBorderIcon className="cart-icon" fontSize="medium"></FavoriteBorderIcon>             
        </div>
         
      </>
    );
  }
  
  export default CartWidget;
  