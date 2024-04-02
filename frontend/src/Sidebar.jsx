import React, { useState } from 'react';
import { useEffect } from "react";
import { getUserData } from "./utils/apiUtils";
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from "./logo/devopsfarm-logo-1500x1500 (1).png";
import { FiAlignJustify } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrMultimedia } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() =>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
          }else{
            document.documentElement.classList.remove("dark");
          }

  }, [theme]);

  const handleThemeSwitch =() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "http://localhost:3000/";
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        console.log("accessToken inside HeaderMain", accessToken);
        if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, []);

return(
    <>

      <div className={`transition-all duration-100 fixed  inset-y-0 z-10 flex w-70 ${isSidebarOpen ? '' : '-translate-x-full'}`}>
     
      <svg
  className="absolute inset-0 w-full h-full dark:text-black text-white"
  style={{
    filter: `${isSidebarOpen ?  'drop-shadow(6px 0 6px ' + (theme === 'dark' ? '#ffffff30' : '#00000030') + ')' : ''}`,
  }}
  preserveAspectRatio="none"
  viewBox="0 0 30 800"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>

        
        <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg>
        
         <div className="transition-all duration-300   z-10 flex flex-col flex-1">
         <div className="transition-all duration-300 flex items-center justify-between flex-shrink-0 w-64 p-4">
  <div className="flex items-center">
    <div className="relative items-center flex w-10 mr-4">
      {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-95"></span> */}
      <img src={logo} loading="lazy" className="w-10" alt="Devops" />
    </div>
    <h1 className="text-lg font-semibold dark:text-white">Devops Farm</h1>
  </div>
  <button onClick={closeSidebar} className="transition-all duration-300 dark:text-white p-1 rounded-lg focus:outline-none focus:ring">
    <svg
      className="w-6 h-6"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <span className="sr-only">Close sidebar</span>
  </button>
</div>


          <nav className="transition-all duration-300  flex flex-col flex-1 w-64 p-4 mt-4">
          <div className="transition-all duration-300  lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
    {userData ? (
       <div className="transition-all duration-300 flex flex-col items-center justify-end text-center lg:pt-2">
   <div className="relative flex justify-center items-center">
  <span 
    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-65"
    style={{ backgroundColor: 'rgba(79, 70, 229, 0.3)' }} 
  ></span>
  <div className=" border-4 mb-1 border-black dark:border-white rounded-full overflow-hidden">
    <img src={userData.data?.avatar_url} alt="User Avatar" className="transition-all duration-300 w-20 h-20 object-cover" />
  </div>
</div>



       <div className="text-lg font-semibold text-black dark:text-white mb-2"> {userData.data?.login}</div>     </div>
     
        
    ) : (
        <></>
    )}
</div>
<div className="transition-all duration-300 flex flex-col mt-1">
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-all duration-300">
        <FaHome className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Home</span>
    </a>
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
        <FcAbout className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">About</span>
    </a>
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
        <MdOutlineMiscellaneousServices className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Services</span>
    </a>
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
        <GrMultimedia className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Media</span>
    </a>
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
        <TbBrandAppgallery className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Gallery</span>
    </a>
    <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
        <MdConnectWithoutContact className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Contact</span>
    </a>
    {userData && (
  <a href="#" onClick={handleLogOut} className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-all duration-300">
    <svg
      aria-hidden="true"
      className="w-6 h-6 mr-2 text-gray-500 dark:text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
    <span className="text-gray-700 dark:text-white">Logout</span>
  </a>
)}

    <a href="#" onClick={handleThemeSwitch} className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300">
    {theme === "dark" ? 
    <>
        <FaSun className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Light</span>
    </>
    :
    <>
        <FaMoon className="mr-2 text-gray-500 dark:text-white" /> 
        <span className="text-gray-700 dark:text-white">Dark</span>
    </>
}
    </a>
    
</div>

          </nav>
          <div>
        

      </div>
           {/* <div className="transition-all duration-300  flex-shrink-0 p-4">
            <button className="transition-all duration-300 dark:text-white flex items-center space-x-2" onClick={handleLogOut}>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span className='dark:text-white transition-all duration-300'>Logout</span>
              </button>
            </div> */}
          </div>
        </div>


        <main className="transition-all duration-300  flex flex-col items-center justify-center flex-1">
  <button onClick={() => setIsSidebarOpen(true)} className="fixed pt-1 dark:text-white dark:bg-black rounded-lg top-5 left-5">
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
   
  </button>
  
</main> 
    </>
  )
}

export default Sidebar;