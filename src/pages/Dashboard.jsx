import Menu from '../components/Menu'
import Payment from '../components/Payment'
import Home from '../components/Home'
import { useAppContext } from '../context/Appcontext';
import App from '../App'



function Dashboard(){
    
    const { CurrentPageDashboard } = useAppContext();
    
    function selectComponent(){
        let page = null
        switch (CurrentPageDashboard){
            case "home":
                page = <Home/>
                break
            case "students":
                page = <App/>
                break
            case "payment":
                page = <Payment/>
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