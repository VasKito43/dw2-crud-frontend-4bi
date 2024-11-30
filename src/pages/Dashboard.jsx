import Menu from '../components/Menu'
import Home from '../components/Home'
import { useAppContext } from '../context/Appcontext';


function Dashboard(){
    
    const { CurrentPageDashboard } = useAppContext();
    
    function selectComponent(){
        let page = null
        switch (CurrentPageDashboard){
            case "home":
                page = <Home/>
            // case "Students"
        return page
        }
    }

    return (
        <div className="flex h-screen">
        <Menu/>
        {selectComponent()}
        </div>
    )
}
export default Dashboard