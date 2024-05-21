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

import "../index";

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

  return (
    <>
      <div className="fixed-div opacity-80">
        <header className="transition-all duration-300 py-4 pr-6 fixed top-0 left-0 right-0 bg-white dark:bg-black  flex items-center justify-between">
          <div className="flex items-center justify-center md:justify-start">
            <Sidebar />
            <img src={logo} className="w-14 ml-4 md:ml-14 md:mr-2" alt="Logo" />
            <span className=" font-semibold dark:text-white text-3xl">
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
