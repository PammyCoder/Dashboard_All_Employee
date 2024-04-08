import React from 'react'
import {  configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import Layout from './Layout.jsx'


  



const router=createBrowserRouter(
  createRoutesFromElements(
   
   <Route path='/' element={<Layout/>}>
    {/* <Route path='/' element={<App/>}/> */}
    {/* <Route path='/add' element={<Create/>}/>
    <Route path='/edit' element={<Edit/>}/> */}
   </Route>
  )
)





ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,

)
