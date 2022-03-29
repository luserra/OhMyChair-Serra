import './ItemListContainer.css'
import ItemList from './ItemList';

const ItemListContainer = ({firstTitle}) => {

    return (
        <>
        <div className='container'>
            <h2 className='title-container'>{firstTitle}</h2>
            <ItemList />
        </div>
        </>
    );
  }
  
  export default ItemListContainer;
  