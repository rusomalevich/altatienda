import React from 'react'
import { ProductsList, Filter } from "../";
import './productspage.css'

const ProductsPage = () => {
  return (
    <>
        <h1>Productos</h1>
        <div className='products'>
            <ProductsList />
            <Filter />
        </div>
    </>
  )
}

export default ProductsPage