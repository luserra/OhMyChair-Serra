import ItemCount from "./ItemCount";
import './Card.css'

const Card = ({product}) => {

    const onAdd = (count) => {
        if (count === 1) {
            alert(`Felicitaciones! Agregaste ${count} producto al carrito`)
        } else if (count > 1) {
            alert(`Felicitaciones! Agregaste ${count} productos al carrito`)
        }
    }
    
    return(
        <>
            <div className='card-item'>
                <img src={product.image} className='img-item' alt="Silla Tossberg" />
                <h4 className='title-item'>{product.title}</h4>
                <p className='category-item'>{product.category}</p>
                <p className='price-item'>$ {product.price}</p>
                <ItemCount stock={product.stock} onAdd={onAdd} />
            </div>
        </>
    )
}

export default Card;