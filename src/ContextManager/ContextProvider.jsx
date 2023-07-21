import React, {createContext, useContext, useState, useEffect} from "react"
import axios from 'axios'
const Context = createContext()

const ContextProvider = ({children}) => {
    const BASEURL = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`${BASEURL}`)
            setProducts(response.data)
        }
        getProducts()
    }, [])

    const getProductsById = (id) => {
        return products.find(product => product.id === Number(id))
    }

    const filterSearch = (searchValue) => {
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredProducts(filteredProducts)
    }

  return (
      <Context.Provider value={{ products, setProducts, getProductsById, filteredProducts, setFilteredProducts, filterSearch}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider