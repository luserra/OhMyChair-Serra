import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from './Item';
import productsList from '../../data/products.js';

const ItemList = ({firstTitle}) => {
    
    const { category } = useParams()

    const [items, setItems] = useState([]);

    const getItems = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(productsList)
        }, 2000); 
      })
    } 

    useEffect( () => {
      setItems([])
      getItems().then( (items) => {
          category ? filterProductByCategory(items, category) : setItems(items)
        })
    }, [category])

    const filterProductByCategory = (array , category) => {
      return array.map( (item, i) => {
          if(item.category === category) {
              return setItems(items => [...items, item]);
          }
      })
    }

    return (
      <>
      <h2 className='title-container'>{firstTitle}</h2>
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
          <p className='load'>Cargando...</p>
        ) 
      }
        </div>
      </>
      
    );
  }
  
  export default ItemList;
  