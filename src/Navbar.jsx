import React from 'react'
import fadaLogo from './pic/fadaLogo.png'

function Navbar() {
  return (
    <div className='nav-container hide'>
        <img src={fadaLogo}></img>
        <ul>
            <a href='#Home'><li>Home</li></a>
            <a href='#About'><li>About</li></a>
            <a href='#Product'><li>Product</li></a>
            <a href='#Review'><li>Review</li></a>
            <a href='#Contact'><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Navbar