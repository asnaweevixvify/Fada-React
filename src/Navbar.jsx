import React from 'react'
import fadaLogo from './pic/fadaLogo.png'
import { useState } from 'react'
import './App.css'


function Navbar() {
  const [show,setShow] = useState(false)
  return (
    <div className='nav-container'>
        <i className="fa-solid fa-bars fa-2x" onClick={setShowStatus}></i>
        <div className={`nav-bar ${show ? '' : 'hide'}`}>
            <img src={fadaLogo}></img>
            <ul>
                <a href='#Home'><li onClick={setClose}>Home</li></a>
                <a href='#About'><li onClick={setClose}>About</li></a>
                <a href='#Product'><li onClick={setClose}>Product</li></a>
                <a href='#Menu'><li onClick={setClose}>Menu</li></a>
                <a href='#Review'><li onClick={setClose}>Review</li></a>
                <a href='#Contact'><li onClick={setClose}>Contact</li></a>
            </ul>
        </div>
    </div>
  )
  function setShowStatus(){
    setShow(!show)
  }
  function setClose(){
    setShow(false)
  }
}

export default Navbar