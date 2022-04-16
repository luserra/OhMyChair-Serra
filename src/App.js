import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/itemdetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';

// Pages
import HomePage from '././pages/Home';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

// Context 
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={ <HomePage />} />
              <Route path='/productos' element={ <ItemListContainer firstTitle={'Todos los productos'} /> } />
              <Route path='/productos/:category' element={ <ItemListContainer firstTitle={''} /> } />
              <Route path='/productos/:category/:id' element={<ItemDetailContainer />} />
              <Route path='/contacto' element={ <ContactPage />} />
              <Route path='/nosotros' element={ <HomePage />} />
              <Route path='/cart' element={ <Cart />} />
              <Route path='*' element={ <NotFoundPage />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
    );
}

export default App; 