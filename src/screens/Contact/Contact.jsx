import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contactPage'>
        <h1>Contacto</h1>
        <form action="" className="contactForm">
            <label htmlFor="fullName" className='required'>Nombre completo</label>
            <input type="text" name="fullName" id="fullName"  required/>
            <label htmlFor="email" className='required'>Correo electrónico</label>
            <input type="email" name="email" id="email"  required/>
            <label htmlFor="message" className='required'>Mensaje</label>
            <textarea name="message" id="message" cols="30" rows="10" required></textarea>
            <button className='btn btnSend'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact