import React from 'react'
import { useParams } from 'react-router-dom'


const Search = () => {
  
  const { searchQ } = useParams()
  
  return (
    <div>{searchQ}</div>
  )
}

export default Search