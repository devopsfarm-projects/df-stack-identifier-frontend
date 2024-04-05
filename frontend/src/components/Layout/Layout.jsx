import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout