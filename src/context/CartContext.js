import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    const addProductToCart = (product) => {
        console.log('Producto agregado: ', product)
        setCart(cart => [...cart, product]) // trae los productos que ya agregué y suma el nuevo
    }

    const data = {
        cart,
        addProductToCart
    }

return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
)
}

export { CartProvider }
export default CartContext