import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    
    console.log(initialValue)
    console.log(stock)
    console.log(id)
    
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
    }

  return (
    <>
        <button className='addBtn' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
        <span className='quantityInCart'>{quantity}</span>
        <button className='subBtn' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
        <button className='deleteBtn' onClick={() => setQuantity(0)}><Trash /></button>
        <button onClick={onClickAddProduct} className='btn'>Agregar al carrito</button>
    </>
  )
}

export default Counter