import Menu from '../components/Menu'
import Register from '../components/Register'
import Home from '../components/Home'
import Delete from '../components/Delete'
import { useAppContext } from '../context/Appcontext';
import Students from '../components/Students'
import Update from '../components/Update';



function Dashboard(){
    
    const { CurrentPageDashboard } = useAppContext();
    
    function selectComponent(){
        let page = null
        switch (CurrentPageDashboard){
            case "home":
                page = <Home/>
                break
            case "students":
                page = <Students/>
                break
            case "register":
                page = <Register/>
                break
            case "delete":
                page = <Delete/>
                break
            case "update":
                page = <Update/>
                break
            }
        return page
    }

    return (
        <div className="flex h-screen">
        <Menu/>
        {selectComponent()}
        </div>
    )
}
export default Dashboard