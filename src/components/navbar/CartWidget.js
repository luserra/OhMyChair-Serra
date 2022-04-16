import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartContext from '../../context/CartContext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Divider } from '@mui/material';

function CartWidget() {

  const { cart, cantidad, total, removeItem } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <Tooltip title="Carrito">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'cart-widget' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
          <AddShoppingCartIcon className="cart-icon" sx={{ width: 30, height: 30 }} />
          {
            (cart.length >= 1) 
            &&
            <p>{cart.length}</p>
          }
          
          
          </IconButton>
        </Tooltip>
      
      <Menu
        anchorEl={anchorEl}
        id="cart-widget"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >            

        <div className='cart-widget-container'>
          <h3 className='cart-widget-title'>Carrito</h3>
        <Divider />
            {
            (cart.length === 0)
            
            &&
            
            <div style={{textAlign:'center'}}>
                <p className='cart-widget-p'>No hay productos en tu carrito</p>
                <Link to='/productos'><button className='cw btn-primary'>Ir a la tienda</button></Link> 
            </div>
            
            } 
            {
              cart.map((prod) =>(
                <div key={ prod.id }>
                    <MenuItem>
                    <div className='cart-widget-p'>
                        <p>{prod.title} ({prod.cantidad})</p>
                     </div>
                     <div className='cart-widget-p'>
                        <p>$ {prod.price}</p>
                     </div>
                     <div className='cart-widget-p' onClick={removeItem}>
                        <HighlightOffIcon className="cart-icon" fontSize="large" onClick={() => removeItem(prod.id)}/>
                     </div>
                     </MenuItem>
                     <Divider />
                     
                </div>
                ))
                
                }
                <Link to='/cart'><button className='cw btn-primary'>Ir al carrito</button></Link> 
              </div>
      </Menu>
      
    </>
  );
}

export default CartWidget;