import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);
   // const [count, setCount] = useState(1);

    const addItem = () => {
        if (quantity < stock) {
        setQuantity(quantity + 1);
        }
    };

    const removeItem = () => {
        if (quantity >= 1) {
        setQuantity(quantity - 1);
        }
    }

    return (
        <>     
            <p>Stock: {stock}</p>          
            <div className='container-quantity'>
                <button className='btn-quantity' onClick={removeItem}>-</button>
                <p className='p-quantity'>{quantity}</p>
                <button className='btn-quantity' onClick={addItem}>+</button>

            </div>
            <button className='add-cart' onClick={()=>onAdd(quantity)}>Añadir al carrito</button>

        </>
    );
}

export default ItemCount;