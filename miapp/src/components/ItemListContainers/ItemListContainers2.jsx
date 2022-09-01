import React from 'react'
import { ItemCount } from './ItemCount';
import './ItemListContainers2.css'



const ItemListContainers2 = ({greeting}) => {
    const handleAdd=()=>{
        console.log('se agrego al carrito')
    }
  return (
    <>
      <div className='greeting'>{greeting}</div>
       
    <ItemCount handleAdd={handleAdd} initialStock={10}/>
    </>
  )
}

export default ItemListContainers2;