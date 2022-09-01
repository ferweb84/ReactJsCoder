import React, { useState } from 'react'


export const ItemCount= ({handleAdd, initialStock})=>{
    const [count,setCount]=useState(0)
    const onAdd= ()=>{
        setCount(count +1)
        
  
    }
    const onDecrement = ()=>{
        setCount(count -1)
    
  
    }
    return(
      <div className='contador'>
        <p>{count}</p>
        <button className='boton' onClick={onAdd}>+</button>
        <button className='boton'onClick={onDecrement}>-</button>
        <button className='boton'onClick ={handleAdd}>Agregar al carrito</button>
      </div>
    )
  }
  