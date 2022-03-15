import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './NavBar.css'

function NavBar() {
  return (
      <>
      <header>
        <nav>
          <h1 className='logo'>OH MY CHAIR!</h1>
          <ul>
            <Stack spacing={6} direction="row">
              <li><Button className='btn-nav'>Productos</Button></li>
              <li><Button className='btn-nav'>Nosotros</Button></li>
              <li><Button className='btn-nav'>Contacto</Button></li>
              <Stack spacing={2} direction="row">
                <li><AddShoppingCartIcon fontSize="medium" sx={{ marginTop: 1}}></AddShoppingCartIcon></li>
                <li><FavoriteBorderIcon fontSize="medium" sx={{ marginTop: 1}}></FavoriteBorderIcon></li>
              </Stack>
            </Stack>
          </ul>
        </nav>
      </header>
       
    </>
  );
}

export default NavBar;
