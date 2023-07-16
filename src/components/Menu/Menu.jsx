import React from 'react'
import { HouseDoorFill, CartFill } from 'react-bootstrap-icons'
import './menu.css'

const Menu = () => {
  return (
    <nav className='menu'>
        <a>Contacto</a>
        <a><HouseDoorFill /></a>
        <a><CartFill/></a>
    </nav>
  )
}

export default Menu