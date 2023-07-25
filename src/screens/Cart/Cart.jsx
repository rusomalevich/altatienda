import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../components'
import { Trash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import SweetAlert2 from 'react-sweetalert2'
import './cart.css'

const Cart = () => {
  const {cart, getTotal, isInCart, removeFromCart } = useCustomContext()
  const [swalProps, setSwalProps] = useState({})


  return (
    <div className='cartContainer'>
      <h1>Carrito</h1>
      {cart.length > 0
      ?
      <>
        <div className='cart'>
          {cart.map((product, index) => (
            <div key={product.id} id={product.id} className='card'>
                <img src={product.image} alt={product.title} />
                <div className='cartProductDetails'>
                  <Link to={'/detail/' + product.id} title={product.title}>
                    <h2>{product.title}</h2>
                  </Link>
                  <h3 className='category'>{product.category}</h3>
                  <p className='price'>${product.price}</p>
                  {
                    isInCart(product.id)
                    ?
                    <Counter initialValue={product.quantity} stock={product.stock} id={product.id} deleteItem={() => removeFromCart(product.id)} />
                    :
                    <Counter initialValue={1} stock={product.stock} id={product.id} deleteItem={() => removeFromCart(product.id)} />
                  }
                </div>
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
        <p>Tu carrito está vacío, podés agregar tus productos <NavLink to="/">aquí</NavLink></p>
      }
    </div>
  )
}

export default Cart
