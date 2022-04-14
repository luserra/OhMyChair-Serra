import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';


const ItemDetailContainer = ({dataProduct}) => {

    return(
        <>
            <ItemDetail item={dataProduct}/>
        </>
        
    );
  }
  
  export default ItemDetailContainer;