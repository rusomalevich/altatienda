import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductsList } from '../../components'

const Cart = () => {
  const {cart, getTotal} = useCustomContext()

  return (
    <div className='cartContainer'>
      <h2>Carrito</h2>
      <div className='cart'>
        {cart.map(product => (
          <ProductsList key={product.id} producto={product} />
          ))
        }
      </div>
      <div>
        Total: ${getTotal()}
      </div>
    </div>
  )
}

export default Cart