import './App.css';
import NavBar from './components/navbar/NavBar';
import MainSection from './components/mainsection/MainSection';
import ItemListContainer from './components/products/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <MainSection />
      <ItemListContainer firstTitle={'Productos'} />
    </>
    );
}

export default App;