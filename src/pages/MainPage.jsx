import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainPage
