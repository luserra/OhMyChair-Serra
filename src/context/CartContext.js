import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //console.log('cart: ', {cart});
    /*  const addProductToCart = (product) => {
        //console.log('Producto agregado: ', product)
        setCart(cart => [...cart, product]) // trae los productos que ya agregué y suma el nuevo
    } */

    const isInCart = (id) =>{
        return cart.some( product => product.id === id)  
    }

    const addItem = (item) => {
        if ( isInCart(item.id) ) {
            console.log('el carrito tiene productos')
            const product = cart.find((p) => p.id === item.id);
            const { cantidad } = product;
            
            product.cantidad = item.cantidad + cantidad;
             const newCart = [ ...cart ];
             setCart(newCart);
             console.log('cantidad total: ', cantidad)
 
         } else {
             console.log('el carrito estaba vacío')
             setCart(cart => [...cart, item])
         }
    }

    const removeItem = (id) => {
        setCart(cart.filter(p => p.id !== id));
        console.log('Elimino el producto')
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
        //addProductToCart,
        removeItem,
        clearCart,
        total,
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