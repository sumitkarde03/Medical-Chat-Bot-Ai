import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Home, NotFound, About, Faq, Pricing, Login } from './Routs/index.js'
import {PatientDashboard} from './Routs/patient.js'
import PrivateRoute from './Routs/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='faq' element={<Faq/>}/>
      <Route path='pricing' element={<Pricing/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='dashboard' element={<PatientDashboard/>}/>
      {/* 🔒 Private Patient Route */}
      {/* <Route 
        path='patient' 
        element={
          <PrivateRoute>
            <PatientDashboard />
          </PrivateRoute>
        } 
      /> */}

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
