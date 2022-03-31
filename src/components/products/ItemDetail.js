import './ItemDetail.css'
import ItemCount from "./ItemCount";



const ItemDetail = ( { item } ) => {
    
    const { id, image, title, price, stock, description} = item;

    const onAdd = (quantity) => {
        if (quantity === 1) {
            alert(`Felicitaciones! Agregaste ${quantity} producto al carrito`)
        } else if (quantity > 1) {
            alert(`Felicitaciones! Agregaste ${quantity} productos al carrito`)
        }
    }

    return(
        <>
            <div className='items-left'>
                <img className='img-detail' src={image} alt={image} />
            </div>
            
            <div className='items-right'>
                <h4 className='title-detail' >{title}</h4>
                <p className='description-detail'>{description}</p>
                <p className='price-detail'>$ {price}</p>
                <div className="cart-item-detail" >
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </div>           
        </>
    )
}

export default ItemDetail;