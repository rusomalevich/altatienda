import React from 'react'
import { ProductsList, Filter } from "../../components";
import './homepage.css'

const HomePage = () => {
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

export default HomePage