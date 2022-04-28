import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css'
import { Link, useNavigate } from "react-router-dom";
import CartContext from '../../context/CartContext';
import db from '../../firebase';
import { doc, getDoc } from  'firebase/firestore';


const ItemDetail = () => {
    const { id } = useParams() 
    const [product, setProduct] = useState({}) 
    const [quantity, setQuantity] = useState(1); 
    const [button, setButton] = useState(true)
    const { addItem, removeItem } = useContext(CartContext);
    const navigate = useNavigate()

    const getItem = async () => {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
          } else {
            console.log("No such document!");
            navigate('/not-found')
          }
    } 
   
    useEffect( () => {
        getItem()
    }, [id])

   
    const onAdd = (quantity) => {
        if (quantity >= 1) {
            addItem( {...product, cantidad: quantity} )
            setButton(false)         
        }
    }    
    
    return(
        
        <div className='container-detail'>
            <div className='items-left'>
                <img className='img-detail' src={`/assets/images/${product.image}`} alt={product.image} />
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
                    </div>
                )
                }
                </div> 
            </div>
        </div>      
        
    )
}

export default ItemDetail