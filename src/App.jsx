import { useState } from 'react'
import './App.css'
import { Header, ProductsPage, Footer } from './components'
import { Cart, Contact, DetailPage, HomePage, SearchPage } from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <main>
        {/*<ProductsPage />*/}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
