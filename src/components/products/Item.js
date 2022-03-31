import React from 'react';
import './Item.css'
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    const {id, image, title, category, price, stock} = item;

    const onAdd = (quantity) => {
        if (quantity === 1) {
            alert(`Felicitaciones! Agregaste ${quantity} producto al carrito`)
        } else if (quantity > 1) {
            alert(`Felicitaciones! Agregaste ${quantity} productos al carrito`)
        }
    }

    return(
        <>
            
                <div className='card-item'>
                <Link to='/item-detail'> <img className='img-item' src={image} alt={image} />
                    <h4 className='title-item'>{title}</h4>
                </Link>
                    <p className='category-item'>{category}</p>
                    <p className='price-item'>$ {price}</p>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            
        </>
    )
}

export default Item;