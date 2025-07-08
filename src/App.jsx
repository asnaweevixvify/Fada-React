import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

function App() {

  return (
    <div className='body'>
      <Helmet>
        <title>ฟาด้าน้ำปลาร้าฮาลาล</title>
        <meta name="description" content="ฟาด้าน้ำปลาร้าฮาลาล น้ำปลาร้าฮาลาลที่ทำจากมุสลิมแท้ 100 % ผลิตจากปลาทะเล ขวดละ 35 บาท ผ่านการรับรองมาตรฐานฮาลาล" />
        <meta name="keywords" content="ฟาด้า,น้ำปลาร้า,น้ำปลาร้าฮาลาล,ฟาด้าน้ำปลาร้าฮาลาล,fadafoods,fada" />
        <meta property="og:title" content="ฟาด้าน้ำปลาร้าฮาลาล" />
        <meta property="og:description" content="น้ำปลาร้าฮาลาล" />
      </Helmet>
      <div className="onBody">
        <Navbar/>
        <Home/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
