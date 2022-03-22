import './ItemListContainer.css'

const ItemListContainer = ({firstTitle}) => {

    return (
        <>
        <div className='container'>
            <h2 className='title-container'>{firstTitle}</h2>
        </div>
        </>
    );
  }
  
  export default ItemListContainer;
  