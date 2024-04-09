import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout