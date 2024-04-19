import { useEffect, useState } from "react";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { getUserData } from "../../utils/apiUtils";
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import { NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { PiFolderSimpleUserBold } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import '../index'

function Header() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const handleThemeSwitch =() => {
    setTheme(theme === "dark" ? "light" : "dark");
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
          console.log("accessToken inside HeaderMain", accessToken);
          if (accessToken) {
          const userData = await getUserData();
          console.log("userData in Header.jsx ", userData);
          setUserData(userData);
        }
      };

      // Call fetchData function only once when component mounts
      fetchData();
    } catch (error) {
      console.error("Error occurred in Header useEffect:", error);
    }
  }, [theme]); 

    return (
      <>
              <div className="fixed-div opacity-90">
 
        
              <header className="transition-all duration-300 py-4 pr-6 fixed top-0 left-0 right-0 bg-white dark:bg-black  flex items-center justify-between">
      <div class="flex items-center justify-center md:justify-start">
  <Sidebar />
  <img src={logo} class="w-10 ml-4 md:ml-14 md:mr-2" alt="Logo" />
  <h1 class="text-lg font-semibold dark:text-white">DevopsFarm</h1>
</div>

      <nav className="md:flex gap-6 hidden">
              <NavLink to='/'
              className={({isActive}) => `transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400"  }`}
              ><FaHome className="mr-1"/>Home
              </NavLink>
              <NavLink
                to='/about'
                className={({isActive}) =>`transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400" }`}
              ><FcAbout className="mr-1" />About
              </NavLink>
              <NavLink
                to='/contact'
                className={({isActive}) =>`transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400"  }`}
              ><MdConnectWithoutContact className="mr-1" />Contact
              </NavLink>
              {userData && (
              <NavLink
                to='/userdata'
                className={({isActive}) =>` transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400" }`}
              ><PiFolderSimpleUserBold className="mr-1" />UserData
              </NavLink> )}
        <button onClick={handleThemeSwitch} className="flex dark:text-white items-center hover:text-gray-500">
          {theme === "dark" ? 
            <><FaSun className="mr-2" /> Light</> : 
            <><FaMoon className="mr-2"/> Dark</>
          }
        </button>
      </nav>
      {userData && (
        <div className="flex items-center">
          <img src={userData.data.data?.avatar_url} className="w-8 h-8 rounded-full border-2 border-gray-300" alt="Avatar" />
          <p className="ml-2 text-sm font-medium dark:text-white">{userData.data.data?.login}</p>
        </div>
      )}
    </header>
</div>
     
      </>
    );
}

export default Header;






   {/* <header className="transition-all duration-300 py-4 px-6 fixed opacity-75    md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600 dark:bg-black dark:text-white bg-white text-black">
          <div className="flex items-center">
            <span className="relative items-center flex  w-10">
              <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-sky-600 opacity-95">
              </span>
              <img src={logo} loading="lazy" className="w-10 mr-2" alt="Devops" />
            </span>
            <h1 className="text-xl font-semibold">Devops Farm</h1>
          </div>
          <div className="hidden md:block">
            <nav className="flex justify-center md:justify-start flex-wrap gap-6 font-medium">
              <NavLink
                to='/Home'
                className={({isActive}) => `transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400"  }`}
              ><FaHome className="mr-1"/>Home
              </NavLink>
              <NavLink
                to='/about'
                className={({isActive}) =>`transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400" }`}
              ><FcAbout className="mr-1" />About
              </NavLink>
              <NavLink
                to='/contact'
                className={({isActive}) =>`transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400"  }`}
              ><MdConnectWithoutContact className="mr-1" />Contact
              </NavLink>
              <NavLink
                to='/userdata'
                className={({isActive}) =>` transition-all duration-300 flex items-center ${isActive ? " text-red-600 hover:text-gray-400" : "text-gray-500 dark:text-white hover:text-gray-400" }`}
              ><PiFolderSimpleUserBold className="mr-1" />UserData
              </NavLink>
              <a href="#" onClick={handleThemeSwitch} className="transition-all duration-300 flex items-center hover:text-gray-400"> 
                {theme === "dark" ? 
                  <>
                    <FaSun className="mr-2 text-gray-500 dark:text-white hover:text-gray-400" />    Light
                  </> : 
                  <>
                    <FaMoon className="mr-2 text-gray-500 dark:text-white hover:text-gray-400" /> Dark
                  </>
                }
              </a> 
            </nav>
          </div>
          <div className="hidden md:flex items-center justify-center md:justify-start">
            {userData && ( 
              <div className="flex items-center">
                <img src={userData.data.data?.avatar_url} className="transition-all duration-300 w-5 h-5  rounded-full border-2 border-black dark:border-white" alt="Avatar" style={{ objectFit: "cover" }}
                />
                <p className="transition-all duration-300 text-lg font-semibold text-black dark:text-white">
                  <span className="px-2 py-1 rounded-md mr-2"> {userData.data.data?.login}
                  </span>
                </p>
              </div>
            )}
          </div>
        </header> */}



