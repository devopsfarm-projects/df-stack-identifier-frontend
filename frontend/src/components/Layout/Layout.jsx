import Login from "../Login/Login.jsx";
import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
function Layout() {
  return (
    <>
      <Header/>
      <Login/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout