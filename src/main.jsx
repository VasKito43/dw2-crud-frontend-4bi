import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SingIn from './SingIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SingIn/>
  </StrictMode>,
)
