import React from 'react'
import './filter.css'

const Filter = () => {
  return (
    <div className='filter'>
        <div className='brand'>
            <h2>Marca</h2>
        </div>
          <div className='memory'>
              <h2>Memoria</h2>
          </div>
          <div className='price'>
              <h2>Precio</h2>
          </div>
    </div>
  )
}

export default Filter