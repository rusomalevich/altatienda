import React from 'react'
import { HouseDoorFill, CartFill, Search, EnvelopeFill } from 'react-bootstrap-icons'
import './menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <nav className='menu'>
        <NavLink to='/' className='navItem'><HouseDoorFill /></NavLink>
        <NavLink to='/search' className='navItem'><Search /></NavLink>
        <NavLink to='/cart' className='navItem'><CartFill/></NavLink>
        <NavLink to='/contact' className='navItem'><EnvelopeFill /></NavLink>
    </nav>

    </>
  )
}

export default Menu