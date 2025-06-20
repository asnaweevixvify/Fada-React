import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'

function App() {

  return (
    <div className='body'>
      <div className="onBody">
        <Navbar/>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
