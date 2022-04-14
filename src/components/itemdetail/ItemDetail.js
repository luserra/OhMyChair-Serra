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
    const [button, setButton] = useState(true)

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

    useEffect( () => {
        console.log('montar evento')        
    }, [])
   
    const onAdd = (quantity) => {
        if (quantity >= 1) {
            setQuantity(quantity)
            console.log(quantity)
            setButton(false)
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

                { button ? (
                        <ItemCount stock={product.stock} onAdd={onAdd} />
                ) : (
                    <div>
                        <Link to={'/cart'}>  
                            <button className='add-cart'>Terminar mi compra</button>
                        </Link>
                        <br/>
                        <Link to={'/productos'}>  
                        <button className='add-cart'>Continuar comprando</button>
                        </Link>
                    </div>
                )
                }     
                </div> 

             

            </div>
        </div>      
        
    )
}

export default ItemDetail