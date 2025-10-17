import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App(){
  return(
    <div>
      <main>
      <Outlet />
      </main>
    </div>
  )
}

export default App;