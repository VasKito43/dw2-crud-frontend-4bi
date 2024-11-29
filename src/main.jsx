import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom'
import './index.css'

import SingIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'
import ResetPassword from './pages/ResetPassword'

// const rotas = createBrowserRouter(createRoutesFromElements(
//   <Route path='/'element={<SingIn/>} > 
//     <Route index element={<SingIn/>} />
//     <Route path='dashboard' element={<Dashboard/>} />
//     {/* <Route path='*' element={<Pagina404/>} /> */}
//   </Route>
  
// ))

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div><Outlet /></div>}> 
      <Route index element={<SingIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="resetpassword" element={<ResetPassword/>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={rotas} />

  </StrictMode>,
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <SingIn/>
//   </StrictMode>,
// )
