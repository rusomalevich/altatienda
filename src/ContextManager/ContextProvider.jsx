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
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)


    const getProductById = (id) => {
        return products.find(product => product.id === Number(id))
    }

    const getProductCartById = (id) => {
        return cart.find(product => product.id === Number(id))
    }

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      };
    

    const isInCart = (id) => cart.some(product => product.id === Number(id))

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id) {
                    product.quantity = quantity
                }
                return product
            }))
        } else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
   
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.price * product.quantity)
        total = Number(total.toFixed(2))
        return total
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await axios.get(`${BASEURL}`)
            setProducts(response.data)
            setLoading(false)
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
            setLoading(true)
            const responseSearchCat = await axios.get(`${BASEURL}${URLsearchInCats}jewelery`)
            setSearchInCategories(responseSearchCat.data)
            setLoading(false)
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
      <Context.Provider value={{ loading, products, setProducts, getProductById, cart, setCart, removeFromCart, addProductCart, isInCart, getProductCartById, getTotal, searchInCategories, categories, filteredProducts, setFilteredProducts, filterSearch, filterCatSearch }}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider