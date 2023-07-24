import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'

const Counter = (initialValue, stock, id) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
    }

  return (
    <>
        <button onClick={onClickAddProduct} className='btn'>Agregar al carrito</button>
    </>
  )
}

export default Counter