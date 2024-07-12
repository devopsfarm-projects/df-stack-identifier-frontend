import { useEffect, useState } from "react";
import logo from "../../logo/devopsfarm-logo-1500x1500 (1).png";
import { getUserData } from "../../utils/apiUtils";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { PiFolderSimpleUserBold } from "react-icons/pi";
import './Header.css'
import "../index";
import { FcLinux } from "react-icons/fc";
import { GrDocker } from "react-icons/gr";
import { FaPython, FaGithub, FaAws, FaJenkins } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiAnsible } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiOpenaiFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { TbArticle } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
function Header() {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      const fetchData = async () => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error occurred in Header useEffect:", error);
    }
  }, [theme]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    
    <div className="fixed-div opacity-80">
      <header className="transition-all duration-300 py-4 pr-6 fixed top-0 left-0 right-0 bg-white dark:bg-black flex items-center justify-between">
      <div className="flex md:hidden">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <main className="transition-all duration-300 flex flex-col items-center justify-center flex-1">
              {!isSidebarOpen && (
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="fixed pt-1 dark:text-white dark:bg-black rounded-lg top-5 left-5 z-50 md:hidden"
                >
                  <TbArticle size={30} />
                </button>
              )}
            </main>
          </div>
        <div className="flex items-center justify-center md:justify-start">
          <img src={logo} className="w-14 ml-4 md:ml-14 md:mr-2" alt="Logo" />
          <span className="font-semibold dark:text-white text-3xl">
            DevopsFarm
          </span>
        </div>

          <nav className="md:flex gap-6 hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-all duration-300 flex items-center text-2xl ${
                  isActive
                    ? " text-red-600 hover:text-gray-400"
                    : "text-gray-500 dark:text-white hover:text-gray-400"
                }`
              }
            >
              <FaHome className="mr-1" />
              Home
            </NavLink>
            <div className="dropdown">
    <NavLink className="dark:text-white text-gray-500 transition-all duration-300 flex items-center text-2xl" >Learning-Paths
      <i className="fa fa-caret-down"></i>
    </NavLink>
    <div className="dropdown-content">
    <div className="dropdown-content">
      <div className="row">
        <div className="column">
          <a href="https://www.devopsfarm.in/linux.html"><FcLinux /> Linux</a>
          <a href="#"><GrDocker /> Docker</a>
          <a href="#"><FaPython /> Python</a>
          <a href="#"><FaGithub /> GitHub</a>
        </div>
        <div className="column">
          <a href="#"><SiTerraform /> Terraform</a>
          <a href="#"><SiKubernetes /> Kubernetes</a>
          <a href="#"><DiJava /> Java</a>
          <a href="#"><RiOpenaiFill /> ChatGPT</a>
        </div>
        <div className="column">  
        <a href="#"><SiAnsible  />Ansible</a>
          <a href="#"><FaAws /> AWS</a>
          <NavLink to="/Jenkins" ><a href="#"><FaJenkins /> Jenkins</a></NavLink>
          <a href="#"><TbBrandMysql /> MySQL</a>
        </div>
      </div>
    </div>
    </div>
  </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all duration-300 flex items-center text-2xl ${
                  isActive
                    ? " text-red-600 hover:text-gray-400"
                    : "text-gray-500 dark:text-white hover:text-gray-400"
                }`
              }
            >
              <FcAbout className="mr-1" />
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all duration-300 flex items-center text-2xl ${
                  isActive
                    ? " text-red-600 hover:text-gray-400"
                    : "text-gray-500 dark:text-white hover:text-gray-400"
                }`
              }
            >
              <MdConnectWithoutContact className="mr-1" />
              Contact
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `transition-all duration-300 flex items-center text-2xl ${
                  isActive
                    ? " text-red-600 hover:text-gray-400"
                    : "text-gray-500 dark:text-white hover:text-gray-400"
                }`
              }
            >
              <FaYoutube className="mr-1" />
             Blogs
            </NavLink>
            
            {userData && (
              <NavLink
                to="/userdata"
                className={({ isActive }) =>
                  ` transition-all duration-300 flex items-center text-2xl ${
                    isActive
                      ? " text-red-600 hover:text-gray-400"
                      : "text-gray-500 dark:text-white hover:text-gray-400"
                  }`
                }
              >
                <PiFolderSimpleUserBold className="mr-1" />
                RepoScanner
              </NavLink>
            )}


            <button
              onClick={handleThemeSwitch}
              className="flex dark:text-white items-center text-2xl hover:text-gray-500"
            >
              {theme === "dark" ? (
                <>
                  <FaSun className="mr-2" /> Light
                </>
              ) : (
                <>
                  <FaMoon className="mr-2" /> Dark
                </>
              )}
            </button>
          </nav>
          {userData && (
            <div className="flex items-center">
              <img
                src={userData.data.data?.avatar_url}
                className="w-8 h-8 rounded-full border-2 border-gray-300"
                alt="Avatar"
              />
              <p className="ml-2 text-2xl font-medium dark:text-white">
                {userData.data.data?.login}
              </p>
            </div>
          )}
        </header>
      </div>
    
    </>
  );
}

export default Header;
