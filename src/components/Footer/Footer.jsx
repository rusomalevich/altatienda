import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='bigFooter'>
        <div className='footerColumn footerFullWidth'>
            <h4>Constructor</h4>
            <p className='address'>12 Water St. Vacouver, BC <br /> V6B 132 United States</p>
        </div>
        <div className='footerColumn'>
            <a href="#">Corporate sales</a>
            <a href="#">Feedback</a>
            <a href="#">Jobs</a>
            <a href="#">News</a>
            <a href="#">Sales Rules</a>
            <a href="#">For partners</a>
        </div>
        <div className='footerColumn'>
            <a href="#">Bonus program</a>
            <a href="#">Gift Сards</a>
            <a href="#">Bill Payment Verification</a>
            <a href="#">Loans</a>
            <a href="#">Delivery</a>
            <a href="#">Service centers</a>
        </div>
        <div className='footerColumn footerHide'>
            <a href="#">How to place an order</a>
            <a href="#">Ways of payment</a>
            <a href="#">Exchange and return of goods</a>
            <a href="#">Warranty service</a>
            <a href="#">Order status</a>
            <a href="#">Knowledge base</a>
        </div>
        <div className='footerColumn copyright footerFullWidth'>
            <p>2030 Company. All Rights Reserved.</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </footer>
  )
}

export default Footer