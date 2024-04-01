import React, { useState } from 'react';
import { useEffect } from "react";
import { getUserData } from "./utils/apiUtils";
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from "./logo/devopsfarm-logo-1500x1500 (1).png";
import { FiAlignJustify } from "react-icons/fi";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("light");

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

          {/* Loading screen */}
   

         {/* Sidebar */}
      <div className={`transition-all duration-300 fixed inset-y-0 z-10 flex w-80 ${isSidebarOpen ? '' : '-translate-x-full'}`}>
        {/* Curvy shape */}
        <svg
  className="absolute inset-0 w-full h-full dark:text-black  text-white"
  style={{
    filter: `drop-shadow(10px 0 10px ${theme === 'dark' ? '#ffffff30' : '#00000030'})`
  }}
  preserveAspectRatio="none"
  viewBox="0 0 309 800"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
        
        <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg>
         {/* Sidebar content */}
         <div className="transition-all duration-300   z-10 flex flex-col flex-1">
          <div className="transition-all duration-300  flex items-center justify-between flex-shrink-0 w-64 p-4">
            {/* Logo */}
            <span className="relative items-center flex  w-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-95"></span>
          <img src={logo} loading="lazy" className="w-10 mr-2" alt="Devops" />
        </span>  <h1 className="text-xl font-semibold dark:text-white">Devops Farm</h1>  {/* <a href="#">
              <span className="sr-only">K-UI</span>
              <svg
                aria-hidden="true"
                className="w-16 h-auto text-blue-600"
                viewBox="0 0 96 53"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                 <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.69141 34.7031L13.9492 28.1992L32.0898 52H40.1758L18.4492 23.418L38.5938 0.8125H30.4375L7.69141 26.125V0.8125H0.941406V52H7.69141V34.7031ZM35.3008 26.9102H52.457V21.6016H35.3008V26.9102ZM89.1914 13V35.5117C89.1914 39.2148 88.1719 42.0859 86.1328 44.125C84.1172 46.1641 81.1992 47.1836 77.3789 47.1836C73.6055 47.1836 70.6992 46.1641 68.6602 44.125C66.6211 42.0625 65.6016 39.1797 65.6016 35.4766V0.8125H58.9219V35.6875C58.9688 40.9844 60.6562 45.1445 63.9844 48.168C67.3125 51.1914 71.7773 52.7031 77.3789 52.7031L79.1719 52.6328C84.3281 52.2578 88.4062 50.5352 91.4062 47.4648C94.4297 44.3945 95.9531 40.4453 95.9766 35.6172V13H89.1914ZM89 8H96V1H89V8Z"
                />
              </svg>
            </a> */}
            {/* Close btn */}
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
           {/* Navigation */}
           

      
          <nav className="transition-all duration-300  flex flex-col flex-1 w-64 p-4 mt-4">
          <div className="transition-all duration-300  lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
    {userData ? (
        <div className="transition-all duration-300  flex flex-col items-center justify-end text-center lg:pt-2">
         <img src={userData.data.avatar_url} alt="User Avatar" className="transition-all duration-300  w-28 h-22 rounded-full mb-2 self-center" />
            <div className="transition-all duration-300 text-lg font-semibold dark:text-white">Name: {userData.data?.login}</div>
            <div className="transition-all duration-300 dark:text-white">Followers: {userData.data.followers}</div>
            <div className="transition-all duration-300 dark:text-white">Public Repos: {userData.data.public_repos}</div>
            <div className="transition-all duration-300 dark:text-white">Private Repos: {userData.data.total_private_repos}</div>
        </div>
    ) : (
        <div className="transition-all duration-300  border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto  ">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )}
</div>
          </nav>
          <div>
          <span onClick={handleThemeSwitch} className=" cursor-pointer">
  {theme === "dark" ? 
    <FaSun className="ml-9 w-9 h-9 dark:text-white" /> 
    :
<FaMoon className="ml-9 w-9 h-9" /> 
  }
</span>

      </div>
           <div className="transition-all duration-300  flex-shrink-0 p-4">
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
            </div>
          </div>
        </div>
        <main className="transition-all duration-300  flex flex-col items-center justify-center flex-1">
  <button onClick={() => setIsSidebarOpen(true)} className="fixed p-2 dark:text-white dark:bg-black rounded-lg top-5 left-5">
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