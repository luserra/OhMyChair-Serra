import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
      <>
      <header>
        <nav>
          <Link to="/">
            <img src='/assets/images/Logo-oh-my-chair.svg' alt='Logo' className='logo' />
          </Link>  
          <ul>
           <li className='btn-nav'> <Link to="/productos">Productos</Link></li>
              <li className='btn-nav'>Nosotros</li>
              <li className='btn-nav'>Contacto</li>          
              <CartWidget />
          </ul>
        </nav>
      </header>
       
    </>
  );
}

export default NavBar;
