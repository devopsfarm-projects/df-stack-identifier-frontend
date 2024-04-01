import { useEffect, useState } from "react";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { getUserData } from "../../utils/apiUtils";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
import { FaSun, FaMoon } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrMultimedia } from "react-icons/gr";
import { TbBrandAppgallery } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
  Button,
} from "@material-tailwind/react";
import Sidebar from "../../Sidebar";

function HeaderMain() {
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

  return (
    <> 
    <header className="transition-all duration-300 py-4 px-6 md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600 dark:bg-black dark:text-white bg-white text-black">
  
    <div className="flex items-center">
      <span className="relative items-center flex  w-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-95"></span>
        <img src={logo} loading="lazy" className="w-10 mr-2" alt="Devops" />
      </span>
      <h1 className="text-xl font-semibold">Devops Farm</h1>
    </div>
    <div className="hidden lg:block"> 
  <nav className="flex justify-center md:justify-start flex-wrap gap-6 font-medium">
    <a className="transition-all duration-300 flex items-center hover:text-gray-400 " href="#">
      <FaHome className="mr-1" /> Home
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-400" href="#">
      <FcAbout className="mr-1" /> About
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-400" href="#">
      <MdOutlineMiscellaneousServices className="mr-1" /> Services
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-400" href="#">
      <GrMultimedia className="mr-1" /> Media
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-400" href="#">
      <TbBrandAppgallery className="mr-1" /> Gallery
    </a>
    <a className="transition-all duration-300 flex items-center hover:text-gray-400" href="#">
      <MdConnectWithoutContact className="mr-1" /> Contact
    </a>
    <a href="#" onClick={handleThemeSwitch} className="transition-all duration-300 flex items-center hover:text-gray-400">
    {theme === "dark" ? 
    <>
        <FaSun className="mr-2 text-gray-500 dark:text-white hover:text-gray-400" /> 
       Light
    </>
    :
    <>
        <FaMoon className="mr-2 text-gray-500 dark:text-white hover:text-gray-400" /> 
       Dark
    </>
}
    </a>

  </nav>
</div>
    <div className="hidden md:flex items-center justify-center md:justify-start"> {/* Added justify-center for center alignment */}
   
  
      {/* <div>
        <span onClick={handleThemeSwitch} className="cursor-pointer">
          {theme === "dark" ?
            <FaSun className="ml-9 w-5 h-5 dark:text-white" />
            :
            <FaMoon className="ml-9 w-5 h-5" />
          }
        </span>
      </div> */}
  
      {userData && (
        <div className="flex items-center ml-8">
          <img
            src={userData.data?.avatar_url}
            className="transition-all duration-300  w-10 h-10 rounded-full mr-2 border-2 border-black dark:border-white"
            alt="Avatar"
            style={{ objectFit: "cover" }} // Ensures the image covers the entire container
          />
          <p className="transition-all duration-300 text-lg font-semibold text-black dark:text-white">
            <span className="  px-2 py-1 rounded-md mr-2">
              {userData.data?.login}
            </span>
          </p>
        </div>
      )}
    </div>
  </header>
  <Sidebar/>
  </>
  
  );
}

export default HeaderMain;





  {/* <div className="block md:hidden ml-auto">
          {userData && (
            <Menu
               className="dark:bg-gray-900bg-white"
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <MenuHandler>
                <Button><AiOutlineBars /></Button>
              </MenuHandler>
              <MenuList>
                <MenuItem className="dark:text-white text-black w-36 dark:bg-gray-900 bg-gray-100" >
                  <Typography variant="small" className="font-medium">{userData.data?.login}</Typography>
                </MenuItem>
                <hr className= "dark:border-blue-gray-50 border-gray-600"/>
                <MenuItem className="dark:text-white text-black w-36 dark:bg-gray-900 bg-gray-100">
                  <Typography variant="small" className="font-medium" onClick={handleLogOut}>
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>  */}


        {/* <div>
        <Button onClick={handleThemeSwitch} className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
          Dark Mode
        </Button>
      </div>  */}