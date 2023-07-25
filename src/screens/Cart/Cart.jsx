import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Trash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import SweetAlert2 from 'react-sweetalert2'
import './cart.css'

const Cart = () => {
  const {cart, getTotal} = useCustomContext()
  const [updatedCart, setUpdatedCart] = useState(cart)
  const [swalProps, setSwalProps] = useState({})

  const deleteItem = (index) => {
    const newCart = [...updatedCart]
    newCart.splice(index, 1)
    setUpdatedCart(newCart)
  }

  return (
    <div className='cartContainer'>
      <h2>Carrito</h2>
      {updatedCart.length > 0
      ?
      <>
        <div className='cart'>
          {updatedCart.map((product, index) => (
            <div key={product.id} id={product.id} className='card'>
              <Link to={'/detail/' + product.id} title={product.title} className='cardLink'>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} />
                <h3 className='category'>{product.category}</h3>
                <p className='price'>${product.price}</p>
              </Link>
              <button className='deleteBtn' onClick={() => deleteItem(index)}>{product.quantity}<Trash /></button>
            </div>
            ))}
        </div>
        <div className='priceBtnContainer'>
          <p className='priceDetail'>
            ${getTotal()}
          </p>
            <button className='btn' onClick={() => {
              setSwalProps({
                show: true,
                title: '¡Tu compra fue realizada con éxito!'
              })
            }} >Comprar</button>

          <SweetAlert2 {...swalProps} />
        </div>
      </>
      :
      <p>El carrito está vacío</p>
      }
    </div>
  )
}

//            <ProductsList key={product.id} producto={product} />
export default Cart
