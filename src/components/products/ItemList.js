import React, { useState, useEffect } from 'react';
import './ItemList.css';
import Item from './Item';
import { productsList } from '../../data/products.js';

const ItemList = () => {

    // 1. Declaro items y le indico que va a ser un array - useState
    const [items, setItems] = useState([]);

    // 2. Simulo el tiempo de retardo del servidor donde estaría la DB con los productos
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productsList);
        }, 2000);
      });

    // 3. Llamo a la promesa, acá traería los productos desde una DB (con fetch?)
    const getItemsList = async () => {
        try {
          const result = await getItems;
          setItems(result);
        } catch (err) {
          console.log('Error: ' + err);
        }
    };

    // 4. Traigo los productos en el montaje del componente - useEffect
    useEffect(() => {
        getItemsList();
      }, []);
      
    // 5. Armo el listado, con map recorro el array de productos y muestro el componente Item
    return (
        <div className='list-container'>
        {
        items.length ? ( 
          <>
            {
              items.map((item) => {
                const { id } = item;
                return (
                  < >
                    <Item item={item} key={id} />
                  </>
                );
              })
            }
          </>
        ) : (
          <p>Cargando...</p>
        ) 
      }
        </div>
      
    );
  }
  
  export default ItemList;
  