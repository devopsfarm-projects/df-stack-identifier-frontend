import { useEffect, useState } from "react";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { getUserData } from "../../utils/apiUtils";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineBars } from "react-icons/ai";
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
  const [theme, setTheme] = useState("light");

  useEffect(() =>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
          }else{
            document.documentElement.classList.remove("dark");
          }

  }, [theme]);

  const handleThemSwitch =() => {
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
    <header className=" transition-all duration-300 py-4 px-6 md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600 dark:bg-black dark:text-white bg-white text-black ">
     
      <div className="flex items-center">
        
        <span className="relative items-center flex  w-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-95"></span>
          <img src={logo} loading="lazy" className="w-10 mr-2" alt="Devops" />
        </span>
        <h1 className="text-xl font-semibold">Devops Farm</h1>
      </div>

      <div className="flex items-center">
        
        <div className="hidden md:block">
          {userData && (
            <div className="flex items-center">
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
              {/* <button onClick={handleLogOut} className={`transition-all duration-300 font-bold py-2 px-4 rounded flex  `}>Logout<IoMdLogOut className="m-1" /></button> */}
            </div>
          )}
        </div>

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
      </div>

      {/* <div>
        <Button onClick={handleThemSwitch} className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
          Dark Mode
        </Button>
      </div> */}
    </header>
  );
}

export default HeaderMain;
