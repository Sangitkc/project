import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="company">
         <h4>Company</h4>
         <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy&Policy</li>
            <li>Affilate Program</li>
         </ul>
      </div>
      <div className="get">
         <h4>Get Help</h4>
         <ul>
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Fletures</li>
            <li>Order Status</li>
            <li>Payment Options</li>
         </ul>
      </div>
      <div className="online">
         <h4>Online Shop</h4>
         <ul>
            <li>Amazon</li>
            <li>Cars.com</li>
            <li>Flipcart</li>
         </ul>
      </div>
      <div className="follow">
         <h4>Follow Us</h4>
         <ul>
            <li>Inatagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
         </ul>
      </div>
    </div>
  )
}

export default Footer
