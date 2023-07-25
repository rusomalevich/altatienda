import React, { useState } from 'react'
import { Trash } from 'react-bootstrap-icons'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import SweetAlert2 from 'react-sweetalert2'
import Swal from 'sweetalert2'


const Counter = ({initialValue, stock, id}) => {
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
   const [swalAddToCart, setSwalAddToCart] = useState({})
    
    console.log(initialValue)
    console.log(stock)
    console.log(id)
    
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        
        /* setSwalAddToCart({
          show: true,
          title: 'El producto fue agregado con éxito',
          
        }) */
    }

    
    Swal.bindClickHandler()
  Swal.mixin({
    toast: false,
    title: 'El producto fue agregado con éxito',
  }).bindClickHandler('data-swal-template')

  return (
    <>
        <button className='addBtn' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
        <span className='quantityInCart'>{quantity}</span>
        <button className='subBtn' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
        <button className='deleteBtn' onClick={() => setQuantity(0)}><Trash /></button>
      <button onClick={onClickAddProduct} className='btn' data-swal-template="#my-template">Agregar al carrito</button>
        <SweetAlert2 {...swalAddToCart} />

    </>
  )
}

export default Counter