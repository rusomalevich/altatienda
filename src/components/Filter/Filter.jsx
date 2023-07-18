import React from 'react'
import './filter.css'

const Filter = () => {
  return (
    <div className='filter'>
        <div className='brand'>
            <h2>Marca</h2>
            <form action="" className='formBrand formChecks'>
                <label htmlFor="apple"><input id="apple" value="Apple" type='checkbox' />Apple</label>
                <label htmlFor="alcatel"><input id="alcatel" value="Alcatel" type='checkbox' />Alcatel</label>
                <label htmlFor="bq"><input id="bq" value="BQ" type='checkbox' />BQ</label>
                <label htmlFor="honor"><input id="honor" value="Honor" type='checkbox' />Honor</label>
                <label htmlFor="meizu"><input id="meizu" value="Meizu" type='checkbox' />Meizu</label>
                <label htmlFor="oneplus"><input id="oneplus" value="OnePlus" type='checkbox' />OnePlus</label>
                <label htmlFor="samsung"><input id="samsung" value="Samsung" type='checkbox' />Samsung</label>
                <label htmlFor="zte"><input id="zte" value="ZTE "type='checkbox' />ZTE</label>
            </form>
        </div>
          <div className='memory'>
              <h2>Memoria</h2>
              <form action="" className='formMemory formChecks'>
                  <label htmlFor="8gb"><input id="8gb" value="8" type='checkbox' />8 Gb</label>
                  <label htmlFor="16gb"><input id="16gb" value="16" type='checkbox' />16 Gb</label>
                  <label htmlFor="32gb"><input id="32gb" value="32" type='checkbox' />32 Gb</label>
                  <label htmlFor="64gb"><input id="64gb" value="64" type='checkbox' />64 Gb</label>
                  <label htmlFor="128gb"><input id="128gb" value="128" type='checkbox' />128 Gb</label>
                  <label htmlFor="256gb"><input id="256gb" value="256" type='checkbox' />256 Gb</label>
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