import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productsList from '../../data/products';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from "react-router-dom";


const ItemDetail = () => {
    const { id, category } = useParams()
    const [product, setProduct] = useState({})

    const [quantity, setQuantity] = useState(1);

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


    // funcion onAdd declarada en el padre y pasarla como props al hijo 
    useEffect( () => {
        console.log('montar evento')
        
        return () => {
            console.log('desmontar evento')
        }
    }, [])
   
    const onAdd = (quantity) => {
        if (quantity >= 1) {
            setQuantity(quantity)
            console.log(quantity)
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

                        <Link to={'/cart'}>  
                            <button className='add-cart'>Terminar mi compra</button>
                        </Link>
                     
                </div> 

             

            </div>
        </div>      
        
    )
}

export default ItemDetail