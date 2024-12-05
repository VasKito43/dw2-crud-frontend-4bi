import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom'
import './index.css'

import SingIn from './pages/SingIn'
import Dashboard from './pages/Dashboard'
import ResetPassword from './pages/ResetPassword'
import { AppProvider } from './context/Appcontext';
import Register from './components/Register'
import Delete from './components/Delete'

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}> 
      <Route index element={<SingIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="resetpassword" element={<ResetPassword/>} />
      <Route path="register" element={<Register/>} />
      <Route path="delete" element={<Delete/>} />
      <Route path="delete" element={<Delete/>} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AppProvider>

      <RouterProvider router={rotas} />

    </AppProvider>

  </StrictMode>,
)
