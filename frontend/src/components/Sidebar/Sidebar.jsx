import { useState } from 'react';
import { useEffect } from "react";
import { getUserData } from "../../utils/apiUtils";
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrMultimedia } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { logoutUser } from '../../utils/apiUtils';
import {useNavigate} from 'react-router-dom';
import { NavLink} from "react-router-dom";
import { PiFolderSimpleUserBold } from "react-icons/pi";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const navigate = useNavigate();
  
  const handleThemeSwitch =() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogOut = async () => {
    const removeAccessTokenAndLogOut = await logoutUser();
    console.log("Response sidebar handleLogout" , removeAccessTokenAndLogOut);
    navigate('/login')
  }

  useEffect(() => {
    try {
      // Theme change effect
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
  
      // Arrow function to fetch user data
      const fetchData = async () => {
        
          const accessToken = localStorage.getItem("accessToken");
          console.log("accessToken inside Sidebar", accessToken);
          if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);
          }

        
      };
  
      // Call fetchData function only once when component mounts
      fetchData();
    } catch (error) {
      console.error("Error occurred in Sidebar useEffect:", error);
    }
  }, [theme]); // Depend on theme to trigger the effect when theme changes
  

return(
    <>

      <div className={`transition-all duration-100 fixed opacity-90 inset-y-0  z-10 flex w-70 ${isSidebarOpen ? '' : '-translate-x-full'}`}>
     
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

    {userData && (
              <NavLink
                to='/userdata'
                className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300"
              ><PiFolderSimpleUserBold  className="mr-2 text-gray-500 dark:text-white"/>
               <span className="text-gray-700 dark:text-white"> UserData</span>
             
              </NavLink> )}

    {userData ? ( <div className="transition-all duration-300  flex-shrink-0 p-4">
            <button className="transition-all duration-300 pb-5 dark:text-white flex items-center space-x-2" onClick={handleLogOut}>
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
            </div>) : ( <div className="transition-all duration-300  flex-shrink-0 p-4">
            <NavLink to='/login'> <button className="transition-all duration-300 dark:text-white flex items-center space-x-2" >
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
                <span className='dark:text-white transition-all duration-300'>Login with github</span>
              </button></NavLink>
            </div> )}

         
    
</div>
<div className="transition-all duration-300  lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
    {userData ? (
       <div className="transition-all duration-300 flex flex-col items-center justify-end text-center lg:pt-2">
   <div className="relative flex justify-center items-center">
  <span 
    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-65"
    style={{ backgroundColor: 'rgba(79, 70, 229, 0.3)' }} 
  ></span>
  <div class="h-32 w-32 relative cursor-pointer mb-5 border-4  border-black dark:border-white">
    <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
    <div class="absolute inset-0 transform  hover:scale-75 transition duration-300">
      <div class="h-full w-full  rounded-lg shadow-2xl">
      <img src={userData.data.data?.avatar_url} alt="User Avatar"   className="transition-all duration-300 w-full  object-cover" />
      </div>
    </div>
  </div>
  {/* <div className=" border-4 mb-1 border-black dark:border-white rounded-full overflow-hidden">
    <img src={userData.data.data?.avatar_url} alt="User Avatar"   className="transition-all duration-300 w-20 h-20 object-cover" />
  </div> */}
</div>
<div className="text-lg font-semibold text-black dark:text-white mb-2"> {userData.data.data?.login}</div>
</div>
     
        
    ) : (
        <></>
    )}
</div>

          </nav>
           
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