import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import './NavBar.css'


function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(true);

  const handleClick = ()=>{
      setNavOpen(!navOpen);
  }

  useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
      window.scrollY === 0 ? setScrollNav(true) : setScrollNav(false)
  }

  return (
      <>
      <header className={scrollNav?`header`:`header header-scroll`}>
        <nav className='navbar'>

        <Link to="/">
            <img src='/assets/images/Logo-oh-my-chair.svg' alt='Logo' className='logoMobile' />
        </Link>

        <div className="burger-container" onClick={handleClick}><div className={navOpen? 'burger burger-close': 'burger burger-branding'} ></div></div>
        <div className={navOpen? 'navbar-responsive open': 'navbar-responsive'}>
          <Link to="/">
            <img src='/assets/images/Logo-oh-my-chair.svg' alt='logo' className="logo"/>
          </Link>

        <div className="nav-text">
          <ul> 
           <li className='category'>
             <p className='item-nav'>Productos</p>
              <ul className="submenu">
                  <li>
                    <Link 
                      to="/productos/sillas" 
                      className="item-nav"
                      >
                      Sillas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/productos/sillones" 
                      className="item-nav"
                      >
                      Sillones
                    </Link>
                  </li>
                  <li> 
                    <Link 
                      to='/productos/' 
                      className="item-nav"
                      >
                      Ver todos
                    </Link>
                  </li>
              </ul>
           </li>
           
           <li>
              <Link 
              to='/nosotros'
              className="item-nav"
              >
                Nosotros
              </Link>
            </li>

            <li>
              <Link 
                to='/contacto'
                className='item-nav link'  
              >
                Contacto
              </Link>
            </li>
              <CartWidget /> 
          </ul>
          </div>
          </div>
        </nav>
      </header>
       
    </>
  );
}

export default NavBar;
