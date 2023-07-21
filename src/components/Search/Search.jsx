import React, { useState, useEffect } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './search.css'

const Search = () => {
  const [q, setQ] = useState("")
  const { filterSearch, filteredProducts, setFilteredProducts } = useCustomContext()
  /*
  const [q, setQ] = useState("")
  const { filterSearch } = useCustomContext()

  const handleSearch = (e) => {
    e.preventDefault()
    filterSearch(q)
    console.log(q)
  }
  */

  /*
  const handleSearch = (e) => {
    e.preventDefault()
    filterSearch(q)
  }
  */

  const handleChange=(e) => {
    const searchValue = e.target.value
    setQ(searchValue)
    /*const results = filterSearch(searchValue)
    setFilteredProducts(results)
    */
   filterSearch(searchValue)
  }

  return (
    <form className='searchForm'>
      <label htmlFor="search" className='searchLabel'>Buscar</label>
        <input
          type="search"
          placeholder='Buscar'
          id='search'
          name='search'
          className='searchInput'
          value={q}
          //onChange={(e) => setQ(e.target.value)}
          onChange={handleChange}
          />
    </form>
  )
}

export default Search