import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsList from '../data/products';
import ItemCount from '../components/products/ItemCount';

const DetailPage = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductById(productsList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

    const onAdd = (quantity) => {
        if (quantity === 1) {
            alert(`Felicitaciones! Agregaste ${quantity} producto al carrito`)
        } else if (quantity > 1) {
            alert(`Felicitaciones! Agregaste ${quantity} productos al carrito`)
        }
    }
    
    return(
        
        <div className='container-detail'>
            <div className='items-left'>
                <img className='img-detail' src={`/${product.image}`} alt={product.image} />
            </div>
            
            <div className='items-right'>
                <h4 className='title-detail' >{product.title}</h4>
                <p className='description-detail'>{product.description}</p>
                <p className='price-detail'>$ {product.price}</p>
                <div className="cart-item-detail" >
                    <ItemCount stock={product.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>      
        
    )
}

export default DetailPage