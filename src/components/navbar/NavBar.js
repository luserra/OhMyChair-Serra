import { useState, useEffect} from 'react';
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
            
           <li className='category'>
             <p className='item-nav'>Productos</p>
              <ul className="submenu">
                  <li><Link to="/productos/sillas" className="item-nav">Sillas</Link></li>
                  <li><Link to="/productos/sillones" className="item-nav">Sillones</Link></li>
                  <li> <Link to='/productos/' className="item-nav">Ver todos</Link></li>
              </ul>
           </li>

              <Link to='/nosotros'><li className='item-nav'>Nosotros</li></Link>
              <Link to='/contacto'><li className='item-nav'>Contacto</li></Link>
              {/* <Link to='/cart'><CartWidget /></Link>    */}
              <CartWidget />
              
          </ul>
        </nav>
      </header>
       
    </>
  );
}

export default NavBar;
