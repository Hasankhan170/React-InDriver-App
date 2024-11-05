import { Outlet } from "react-router-dom";
import MenuAppBar from "./components/Navbar";



const App = () => {
  
  return (
    <>
      <MenuAppBar />
      <Outlet/>
     
    </>
  );
};

export default App;
