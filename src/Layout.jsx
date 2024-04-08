import React from 'react'
import { Outlet } from 'react-router-dom'
import App from './App'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Layout = () => {
  return (
    <>
   
     <App/>
      <Outlet/>
      
    </>
  )
}

export default Layout