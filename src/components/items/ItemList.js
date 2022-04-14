import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemList.css';
import Item from './Item';
import productsList from '../../data/products.js';
import { CircularProgress } from '@mui/material';
//import db from '../../firebase';
//import { collection, getDocs } from 'firebase/firestore';

const ItemList = () => {
    
    const { category } = useParams()
    const [items, setItems] = useState([]);

    const getItems = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(productsList)
        }, 2000); 
      })
    } 


    // firebase
   /*  const getItems = async () => {
      const ItemsCollection = collection(db, 'products')
      const productsSnapshot = await getDocs(ItemsCollection)
      console.log('productosSnapshop: ', productsSnapshot)
      const productList = productsSnapshot.docs.map((doc)=> {
          console.log(doc.data());
        }
      )
    }  */

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
  