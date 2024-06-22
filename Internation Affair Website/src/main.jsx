import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Application, DesignSummerSchool, Layout } from './components/index.js'


const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout />} />
    <Route path='/Apply' element={<Application />} />
    <Route path='/DesignSummerSchool' element={<DesignSummerSchool />} />
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
