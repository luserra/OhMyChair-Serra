import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {
  return (
      <>
      <header>
        <nav>
          <h1 className='logo'>OH MY CHAIR!</h1>
          <ul>
              <li className='btn-nav'>Productos</li>
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
