import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import productsList from '../../data/products';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link } from "react-router-dom";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CartContext from '../../context/CartContext';


const ItemDetail = () => {
    // declaro constantes para filtrar por ID el producto y traerlo:
    const { id } = useParams() // para traer desde la URL el id 
    const [product, setProduct] = useState({}) // para traer el objeto del producto por ID
    console.log('producto que trae por id: ', product);

    // declaro la cantidad inicial para después ir guardandola cada vez que se ejecuta onAdd:
    const [quantity, setQuantity] = useState(1); 

    // declaro el boton 'Agregar al carrito' como true para verlo cuando entro al detalle del item
    const [button, setButton] = useState(true)

    // con cada actualización de 'ID' ejecuto la función filtrar por id y le paso como parametros el listado de productos y el id
    useEffect( () => {
        filterProductById(productsList, id)
    }, [id])

    // declaro función filtrar por id, lo hago con un map, recorro el array
    const filterProductById = (array , id) => {
        return array.map( (product) => { // retorno el array de productos
            if(product.id == id) { // si el id de producto es igual al id que del useEffect guardo el producto en el estado
                return setProduct(product)
            }
        })
    }
   
    // declaro la función onAdd que se va a ejecutar cada vez que clickeo en agregar al carrito desde ItemCount
    const onAdd = (quantity) => {
        if (quantity >= 1) {
            setQuantity(quantity)
            console.log('Quantity onAdd(): ', quantity)
            setButton(false)
        }
    }    
    

    const { removeItem } = useContext(CartContext);


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
                            <button className='btn-primary'>Ir al carrito</button>
                        </Link>
                        <br/>
                        <Link to={'/productos'}>  
                        <button className='btn-primary'>Continuar comprando</button>
                        </Link>
                        <br/>
                        <br/>
                        
                        <HighlightOffIcon onClick={removeItem} className="cart-icon" fontSize="large" /><p>Eliminar</p>
                        
                    </div>
                )
                }     
                </div> 

             

            </div>
        </div>      
        
    )
}

export default ItemDetail