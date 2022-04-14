import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //console.log('cart: ', {cart});

    const addProductToCart = (product) => {
        //console.log('Producto agregado: ', product)
        setCart(cart => [...cart, product]) // trae los productos que ya agregué y suma el nuevo
    }

    const removeItem = (id) => {
        console.log('Elimino el producto')
        setCart(cart.filter(p => p.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const data = {
        cart,
        addProductToCart,
        removeItem,
        clearCart
    }



return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
)
}

export { CartProvider }
export default CartContext