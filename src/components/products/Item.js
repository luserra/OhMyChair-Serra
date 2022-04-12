import './Item.css'
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    const {id, image, title, category, price, stock} = item;


    return(
        <>
            
                <div className='card-item'>
                <Link to={`/productos/${category}/${id}`}> 
                    <img className='img-item' src={`/${image}`} alt={image} />
                </Link>
                    <h4 className='title-item'>{title}</h4>
                
                    <p className='category-item'>{category}</p>
                    <p className='price-item'>$ {price}</p>
                <Link to={`/productos/${category}/${id}`}>
                   <button className='add-cart'>Ver detalle</button>
                </Link>
                </div>
            
        </>
    )
}

export default Item;