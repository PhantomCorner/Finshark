import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
