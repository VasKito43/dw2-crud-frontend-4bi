import { StrictMode } from 'react'
import Menu from '../components/Menu'
import Home from '../components/Home'

function Dashboard(){
    
    return (
        <div className="flex h-screen">
        <Menu/>
        <Home/>
        </div>
    )
}
export default Dashboard