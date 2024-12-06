import Menu from "../components/Menu";
import Register from "../components/Register";
import Home from "../components/Home";
import Delete from "../components/Delete";
import { useAppContext } from "../context/Appcontext";
import Students from "../components/Students";
import Update from "../components/Update";

function Dashboard() {
  const { CurrentPageDashboard } = useAppContext();

  function selectComponent() {
    switch (CurrentPageDashboard) {
      case "home":
        return <Home />;
      case "students":
        return <Students />;
      case "register":
        return <Register />;
      case "delete":
        return <Delete />;
      case "update":
        return <Update />;
      default:
        return <Home />;
    }
  }

  return (
    <div className="flex h-screen">
      <Menu />
      {selectComponent()}
    </div>
  );
}

export default Dashboard;
