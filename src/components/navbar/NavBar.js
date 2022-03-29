import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'

function NavBar() {
  return (
      <>
      <header>
        <nav>
         
          <img src='/assets/images/Logo-oh-my-chair.svg' alt='Logo' className='logo' />
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
