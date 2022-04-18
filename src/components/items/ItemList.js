import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from './Item';
import { CircularProgress } from '@mui/material';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
    
    const { category } = useParams()
    const [items, setItems] = useState([]);

    // firebase
    const getItems = async () => {
      const itemsCollection = collection(db, 'products')
      const productsSnapshot = await getDocs(itemsCollection)
      console.log('productsSnapshot: ', productsSnapshot)
      const productList = productsSnapshot.docs.map((doc) => {
            console.log('doc: ', doc.data())
            let product = doc.data()
            product.id = doc.id
            console.log('product: ', product)
            return product
        }
      )
      return productList
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
          <div  className='load'> 
            <CircularProgress disableShrink /> 
          </div>
        ) 
      }
        </div>
      </>
      
    );
  }
  
  export default ItemList;
  