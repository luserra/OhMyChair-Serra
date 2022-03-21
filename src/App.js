import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import MainSection from './components/mainsection/MainSection';


function App() {
  return (
    <>
      <NavBar />
      <MainSection />
      <ItemListContainer />
    </>
    );
}

export default App;