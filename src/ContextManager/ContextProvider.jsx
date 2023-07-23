import React, {createContext, useContext, useState, useEffect} from "react"
import axios from 'axios'
const Context = createContext()

const ContextProvider = ({children}) => {
    const BASEURL = 'https://fakestoreapi.com/products'
    const URLcats = '/categories'
    const URLsearchInCats = '/category/'
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [searchInCategories, setSearchInCategories] =useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`${BASEURL}`)
            setProducts(response.data)
        }
        getProducts()
    }, [])

    useEffect(() => {
        const getCategories = async () => {
            const responseCat = await axios.get(`${BASEURL}${URLcats}`)
            setCategories(responseCat.data)
        }
        getCategories()
    }, [])

    useEffect(() => {
        const getSearchCategories = async () => {
            const responseSearchCat = await axios.get(`${BASEURL}${URLsearchInCats}jewelery`)
            setSearchInCategories(responseSearchCat.data)
        }
        getSearchCategories()
    }, [])

    const getProductsById = (id) => {
        return products.find(product => product.id === Number(id))
    }

    //ESTE BUSCA EN LOS TITLES
    const filterSearch = (searchValue) => {
        const filteredProducts = products.filter((product) =>
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        setFilteredProducts(filteredProducts)
    }

    //ESTE BUSCA EN LAS CATEGORIAS
    const filterCatSearch = (catFilterValue) => {
        const filteredProducts = products.filter((product) =>
            product.category.toLowerCase() === catFilterValue.toLowerCase()
        )
        setFilteredProducts(filteredProducts);
    }
    
  return (
      <Context.Provider value={{ searchInCategories, categories, products, setProducts, getProductsById, filteredProducts, setFilteredProducts, filterSearch, filterCatSearch }}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider