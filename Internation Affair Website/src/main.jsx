import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Application, ApplicationPortal, DesignSummerSchool, FacultyDevelopment, IncomingSemExc, JointDegreeProgramme, Layout, OutgoingSemExc, Partners, SemesterExc, VisaAndImmigration, WinterProgram } from './components/index.js'
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
      <Route path='/joint-program' element={<JointDegreeProgramme/>} />
      <Route path='/SemesterExchange' element={<SemesterExc/>} />
      <Route path='/IncomingSemExc' element={<IncomingSemExc/>} />
      <Route path='/OutgoingSemExc' element={<OutgoingSemExc/>} />
      <Route path='/WinterProgram' element={<WinterProgram/>} />
      <Route path='/FacultyDevelopment' element={<FacultyDevelopment/>} />

    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
