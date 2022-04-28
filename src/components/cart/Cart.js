import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Modal from '../checkout/Modal';
import './Cart.css';
import db from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const Cart = ( ) => {
   
    const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);
    //console.log(cart)
    const [openModal, setOpenModal] = useState(false)
    const [formData, setFormData] = useState({
        name: '',  
        email: '',
        phone: '',
        location: '',
        postal_code: '',
    })
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cart.map( (prod)=> {
                return {
                    id: prod.id,
                    title: prod.title,
                    price: prod.price
                }
            }),
            total: totalPrice
        }
    )
    const [successOrder, setSuccessOrder] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
    }

    const handleChange = (e) => {
        const {value, name} = e.target
        console.log("value: ", value)
        console.log("name: ", name)

        setFormData({
            ...formData,
            [name]: value
        })
    }

    
    return(
        <div className='cart-container'>
            
            <h2 className='title-container'>Carrito</h2>
            {
            (cart.length === 0)
            
            &&
            
            <div style={{textAlign:'center'}}>
                <p>No hay productos en tu carrito</p>
                <Link to='/productos'>
                    <button className='btn-primary'>Ir a la tienda</button>
                </Link>
            </div>
            
            } 
            {                    
            cart.map((prod) =>(
                <div key={ prod.id } className='ctable-container'>
                     <div className='ctable-item'>
                        <img className='img-cart' src={`/assets/images/${prod.image}`} alt={prod.image} />
                    </div>
                    <div className='ctable-item'>
                        <h3>Producto</h3>
                        <p>{prod.title}</p>
                     </div>
                     <div className='ctable-item'>
                        <h3>Precio</h3>
                        <p>$ {prod.price}</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Cantidad</h3>
                        <p>{prod.cantidad}</p>
                     </div>

                     <div className='ctable-item'>
                        <h3>Eliminar</h3>
                        <HighlightOffIcon className="cart-icon" fontSize="large" 
                        onClick={() => removeItem(prod.id)}/>
                     </div>
                </div>
            ))
        }
            
            
        {
            (cart.length >= 1)
            
            &&

            <div className='total-container'>
                <h4 className='cart-total'> Total: ${totalPrice} </h4>
                <button className="btn-primary" onClick={() => setOpenModal(true)}><strong>Comprar</strong></button>
                <button className="btn-primary" onClick={clearCart}>Vaciar carrito</button>
            </div>

        }
        {console.log("Order:", order)}
            <Modal handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div className='modal-container'>
                        <h2>¡Gracias por elegirnos!</h2>
                        <br/>
                        <p>En el transcurso de las siguientes 24hs hábiles te contactaremos para coordinar la entrega de tu compra.</p>
                        <br/>
                        <p>Recordá mantener el número de orden: <strong>{successOrder}</strong> </p>
                        <br/>
                        <p><strong>Equipo Oh my chair!</strong></p>
                       <Link to='/'><button className='btn-primary'>Volver a la home</button></Link> 
                    </div>
                ) : (
                    <div className='modal-container'>
                        <h2>Ya casi tenés tu Oh my chair!</h2>
                        <p>Completá estos simples datos para finalizar tu compra</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre y Apellido' 
                                onChange={handleChange} 
                                value={formData.name}
                                className='input-cart'
                                required 
                            />
                            <br/>
                            <input type="email" name='email' placeholder='Email' 
                                onChange={handleChange} 
                                value={formData.email}
                                className='input-cart'
                                required 
                            />
                            <br/>
                             <input type="number" name='phone' placeholder='Teléfono' 
                                onChange={handleChange} 
                                value={formData.phone}
                                className='input-cart'
                                required 
                            />
                            <br/>
                            <input type="text" name='location' placeholder='Localidad' 
                                onChange={handleChange} 
                                value={formData.location}
                                className='input-cart'
                                required 
                            />
                            <br/>
                            <input type="number" name='postal_code' placeholder='Código Postal' 
                                onChange={handleChange} 
                                value={formData.postal_code}
                                className='input-cart'
                                required 
                            />
                            <br/>
                            <button className='btn-primary' type="submit">Enviar</button>
                        </form>
                    </div>
                )}
                
            </Modal>
        
        
        </div>
    )
}

export default Cart;