import React from 'react'
import fadaLogo from './pic/fadaLogo.png'

function Navbar() {
  return (
    <div className='nav-container'>
        <img src={fadaLogo}></img>
        <ul>
            <li>Home</li>
            <a href='#About'><li>About</li></a>
            <a href='#Product'><li>Product</li></a>
            <li>Review</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar