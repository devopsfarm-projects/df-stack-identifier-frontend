import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { HeaderMain } from '../index.js';
import Footer from '../footer/Footer.jsx';

function Layout() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const location = useLocation();
  
  // useEffect(() => {
    
  //   if (location.pathname === "/userdata" || location.pathname === "/about" || location.pathname === "/blogs"  || location.pathname === "/contact" || location.pathname === "/Jenkins" || location.pathname === "/") 
  //   {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, [location]);

  // console.log('isLoggedIn:', isLoggedIn);

  return (
    <>
      {/* {isLoggedIn &&  <HeaderMain />} */}
      <HeaderMain />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
