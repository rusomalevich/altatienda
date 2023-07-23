import React, { useState} from "react"
import Search from '../Search/Search'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './filter.css'

const Filter = () => {
  const { categories, filterSearch, filterCatSearch, filteredProducts, setFilteredProducts } = useCustomContext()
  const [searchValue, setSearchValue] = useState('')
  const [catFilterValue, setCatFilterValue] = useState('')

  let filterCatForm = document.querySelectorAll('.btnCatFilter')

  const filterChangeToggle = (e) => {
    e.preventDefault()
    filterCatForm.forEach(btn => {
      btn.classList.remove("activeBtn")
    })
    if (catFilterValue !== e.target.value){
      e.target.classList.add('activeBtn')
      setCatFilterValue(e.target.value)
      filterCatSearch(e.target.value)
    } else {
        setCatFilterValue('')
        filterCatSearch('')
    }

  }

  return (
    <div className='filter'>
      <Search />
      <div className='filterCategory'>
        <h2>Categoría</h2>
        <form action="" id='filterCatForm' className='formBrand formChecks'>
          {
            categories.map((category, index) => (
                <button onClick={filterChangeToggle} key={category} name="category" className='btnCatFilter' value={category}>{category}</button>
            ))
            
          }

        </form>
      </div>
      <div className='price'>
        <h2>Precio</h2>
        <form action="" className='formPrice'>
          <label htmlFor="minPrice">Precio Mínimo</label>
          <input type="range" name="" min="10" max="5000" id="minPrice" step="10"/>
          <label htmlFor="maxPrice">Precio Máximo</label>
          <input type="range" name="" min="5000" max="10000" id="maxPrice" step="10"/>
          <div className='numbersContainer'>
            <input type='number' id='minPriceInput' name='' className='inputNumberPrice'/>
            <input type='number' id='maxPriceInput' name='' className='inputNumberPrice'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filter