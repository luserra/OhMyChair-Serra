import { useState, useContext } from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';

function NavBar() {

  const { cart, setCart } = useContext(CartContext);
  console.log('Context navbar: ', cart)

  return (
      <>
      <header>
        <nav>
          <Link to="/">
            <img src='/assets/images/Logo-oh-my-chair.svg' alt='Logo' className='logo' />
          </Link>  
          <ul>
            
           <li className='category'>
             <Link to='/productos/'><p className='item-nav'>Productos</p></Link>
              <ul className="submenu">
                  <li><Link to="/productos/sillas" className="item-nav">Sillas</Link></li>
                  <li><Link to="/productos/sillones" className="item-nav">Sillones</Link></li>
              </ul>
           </li>

              <Link to='/nosotros'><li className='item-nav'>Nosotros</li></Link>
              <Link to='/contacto'><li className='item-nav'>Contacto</li></Link>           
              <CartWidget />
          </ul>
        </nav>
      </header>
       
    </>
  );
}

export default NavBar;
