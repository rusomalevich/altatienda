import React from 'react'
import './header.css'
import {Search, Menu} from './../'
import Logo from './../../assets/logo-altatienda.svg'

const Header = () => {
  return (
    <header className='topHeader'>
        <img src={Logo} alt="altaTienda logo" className='logo'/>
        <Search />
        <Menu />
    </header>
  )
}

export default Header