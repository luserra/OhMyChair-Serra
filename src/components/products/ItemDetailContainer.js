import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';
import { productDetail } from '../../data/product.js';

const ItemDetailContainer = () => {

    const [dataProduct, setDataProduct] = useState({});

    const getItem = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(productDetail)
            }, 2000);
            
        })
    }

    useEffect(() => {
        getItem().then( (product) => {
            setDataProduct(product)
        });
      }, []);
      
 
    return(
        <>
        <h2 className='title-container'>Detalle del producto</h2> 
        <div className='container-detail'>
            <ItemDetail item={dataProduct}/>
        </div>
        </>
        
    );
  }
  
  export default ItemDetailContainer;