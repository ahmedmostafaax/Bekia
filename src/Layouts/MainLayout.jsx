import React from 'react'
import Navbar from '../Component/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer.jsx'

export default function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
