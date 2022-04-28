import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    const isInCart = (id) =>{
        return cart.some( product => product.id === id)  
    }

    const addItem = (item) => {
        if ( isInCart(item.id) ) {
            const product = cart.find((p) => p.id === item.id);
            const { cantidad } = product;
            
            product.cantidad = item.cantidad + cantidad;
             const newCart = [ ...cart ];
             setCart(newCart);
             console.log('cantidad total: ', cantidad)
 
         } else {
             setCart(cart => [...cart, item])
         }
         setTotalPrice(totalPrice + item.price * item.cantidad)
    }

    const removeItem = (id, item) => {
        setCart(cart.filter(p => p.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const total = () => {
        return cart.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0);
     }
 
    const cantidad = () => {
         return cart.reduce((acum, item) => acum += item.cantidad, 0);
     } 

    const data = {
        cart,
        isInCart,
        addItem,
        removeItem,
        clearCart,
        total,
        totalPrice,
        cantidad
        
    }



return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
)
}

export { CartProvider }
export default CartContext