import ItemCount from "./ItemCount";
import './Card.css'

const Card = ({product}) => {
    return(
        <>
            <div className='card-item'>
                <img src={product.image} className='img-item' alt="Silla Tossberg" />
                <h4 className='title-item'>{product.title}</h4>
                <p className='category-item'>{product.category}</p>
                <p className='price-item'>$ {product.price}</p>
                <ItemCount stock={product.stock} />
            </div>
        </>
    )
}

export default Card;