import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Application, ApplicationPortal, DesignSummerSchool, Layout, OutgoingSemExc, Partners, VisaAndImmigration } from './components/index.js'
import Home from './Pages/Home.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/Apply' element={<Application />} />
      <Route path='/ApplicationPortal' element={<ApplicationPortal/>} />
      <Route path='/DesignSummerSchool' element={<DesignSummerSchool />} />
      <Route path='/VisaAndImmigration' element={<VisaAndImmigration />} />
      <Route path='/OutgoingSemExchange' element={<OutgoingSemExc/>} />
      <Route path='/Partners' element={<Partners/>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
