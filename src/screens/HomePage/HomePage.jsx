import React, { useState, useEffect } from 'react'
import { ProductsList, Filter, Search } from "../../components"
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './homepage.css'

const HomePage = () => {
    const { products, filteredProducts } = useCustomContext()
    
    return (
        <>
            <h1>Productos</h1>
            <div className='products'>
                <div className='cardContainer'>
                    {
                        filteredProducts && filteredProducts.length > 0
                        ? filteredProducts.map((product) => (
                            <ProductsList product={product} key={product.id} />
                        ))
                       : products.map((product) => (
                            <ProductsList product={product} key={product.id} />
                       ))
                    }
                </div>
                <Filter />
            </div>
        </>
    )
}

export default HomePage