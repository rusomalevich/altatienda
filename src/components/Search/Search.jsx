import React from 'react'
import './search.css'

const Search = () => {
  return (
    <form className='searchForm'>
        <input type="search" placeholder='Buscar' className='searchInput'/>
    </form>
  )
}

export default Search