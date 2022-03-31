import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/products/ItemListContainer';
import ItemDetailContainer from './components/products/ItemDetailContainer';

// Pages
import HomePage from '././pages/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/productos' element={ <ItemListContainer firstTitle={'Productos'} /> } />
            <Route path='/item-detail' element={ <ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
    );
}

export default App; 