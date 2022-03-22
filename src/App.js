import './App.css';
import NavBar from './components/navbar/NavBar';
import MainSection from './components/mainsection/MainSection';
import ItemListContainer from './components/products/ItemListContainer';
import Card from './components/products/Card';
import ItemCount from './components/products/ItemCount';

function App() {

  const product = {
    image: 'assets/images/silla-tossberd.png',
    title: 'Silla Tossberg',
    category: 'Sillas de metal',
    price: '45.000',
    stock: 5
  }

  return (
    <>
      <NavBar />
      <MainSection />
      <ItemListContainer firstTitle={'Productos'} />
      <Card product={product} />
    </>
    );
}

export default App;