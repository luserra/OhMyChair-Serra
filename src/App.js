import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/products/ItemDetailContainer';

// Pages
import HomePage from '././pages/Home';
import DetailPage from '././pages/Detail';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import ItemList from './components/products/ItemList';
import { Category } from '@mui/icons-material';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/productos' element={ <ItemListContainer firstTitle={'Todos los productos'} /> } />
            <Route path='/productos/:category' element={ <ItemList firstTitle={''} /> } />
            <Route path='/productos/:category/:id' element={<DetailPage />} />
            <Route path='/contacto' element={ <ContactPage />} />
            <Route path='/nosotros' element={ <h2 className='title-container' style={{textAlign:'center'}}>Estamos contruyendo nuestra historia (:</h2>} />
            <Route path='*' element={ <NotFoundPage />} />

          </Routes>
      </BrowserRouter>
    </>
    );
}

export default App; 