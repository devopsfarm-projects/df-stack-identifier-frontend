import { useState, useEffect } from 'react';
import { getUserData, logoutUser } from '../../utils/apiUtils';
import { FaSun, FaMoon, FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { MdConnectWithoutContact } from 'react-icons/md';
import { PiFolderSimpleUserBold } from 'react-icons/pi';
import { useNavigate, NavLink } from 'react-router-dom';
import logo from '../../logo/devopsfarm-logo-1500x1500 (1).png';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [userData, setUserData] = useState(null);
  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogOut = async () => {
    const removeAccessTokenAndLogOut = await logoutUser();
    console.log('Response sidebar handleLogout', removeAccessTokenAndLogOut);
    navigate('/login');
  };

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      const fetchData = async () => {
        const accessToken = localStorage.getItem('accessToken');
        console.log('accessToken inside Sidebar', accessToken);
        if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);
        }
      };

      fetchData();
    } catch (error) {
      console.error('Error occurred in Sidebar useEffect:', error);
    }
  }, [theme]);

  return (
    <>
      <div
        className={`transition-all duration-100 fixed opacity-90 inset-y-0  z-10 flex w-70 ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full dark:text-black text-white"
          style={{
            filter: `${
              isSidebarOpen
                ? "drop-shadow(6px 0 6px " +
                  (theme === "dark" ? "#ffffff30" : "#00000030") +
                  ")"
                : ""
            }`,
          }}
          preserveAspectRatio="none"
          viewBox="0 0 30 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
        </svg>

        <div className="transition-all duration-300   z-10 flex flex-col flex-1">
          <div className="transition-all duration-300 flex items-center justify-between flex-shrink-0 w-64 p-4">
            <div className="flex items-center">
              <div className="relative items-center flex w-10 mr-4">
                <img src={logo} loading="lazy" className="w-10" alt="Devops" />
              </div>
              <h1 className="text-lg font-semibold dark:text-white">
                Devops Farm
              </h1>
            </div>
            <button
              onClick={closeSidebar}
              className="transition-all duration-300 dark:text-white p-1 rounded-lg focus:outline-none focus:ring"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close sidebar</span>
            </button>
          </div>

          <nav className="transition-all duration-300  flex flex-col flex-1 w-64 p-4 mt-4">
            <div className="transition-all duration-300 flex flex-col mt-1">
              <NavLink
                to="/"
                href="#"
                className="flex items-center py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-lg"
              >
                <FaHome className="mr-2 text-gray-500 dark:text-white text-2xl" />
                <span className="text-gray-700 dark:text-white text-2xl">Home</span>
              </NavLink>
              <NavLink
                to="/about"
                href="#"
                className="flex items-center py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-lg"
              >
                <FcAbout className="mr-2 text-gray-500 dark:text-white text-2xl" />
                <span className="text-gray-700 dark:text-white text-2xl">About</span>
              </NavLink>

              <NavLink
                to="/contact"
                href="#"
                className="flex items-center py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:shadow-lg"
              >
                <MdConnectWithoutContact className="mr-2 text-gray-500 dark:text-white text-2xl" />
                <span className="text-gray-700 dark:text-white text-2xl">Contact</span>
              </NavLink>

              <NavLink
                to="/"
                href="#"
                onClick={handleThemeSwitch}
                className="  flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-105 rounded-md transition-all duration-300"
              >
                {theme === "dark" ? (
                  <>
                    <FaSun className="mr-2 text-gray-500 dark:text-white text-2xl" />
                    <span className="text-gray-700 dark:text-white text-2xl">Light</span>
                  </>
                ) : (
                  <>
                    <FaMoon className="mr-2 text-gray-500 dark:text-white" />
                    <span className="text-gray-700 dark:text-white text-2xl">Dark</span>
                  </>
                )}
              </NavLink>

              {userData && (
                <NavLink
                  to="/userdata"
                  className="hover:scale-105 flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-900  rounded-md transition-all duration-300"
                >
                  <PiFolderSimpleUserBold className="mr-2 text-gray-500 dark:text-white text-2xl" />
                  <span className="text-gray-700 dark:text-white text-2xl">
                    {" "}
                    UserData
                  </span>
                </NavLink>
              )}

              {userData ? (
                <div className="transition-all duration-300  flex-shrink-0 p-4">
                  <button
                    className=" hover:scale-105 transition-all duration-300 pb-5 dark:text-white flex items-center space-x-2"
                    onClick={handleLogOut}
                  >
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
                    <span className="dark:text-white transition-all duration-300 text-2xl">
                      Logout
                    </span>
                  </button>
                </div>
              ) : (
                <div className="transition-all duration-300  flex-shrink-0 p-4">
                  <NavLink to="/login">
                    {" "}
                    <button className="hover:scale-105 transition-all duration-300 dark:text-white flex items-center space-x-2">
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
                      <span className="dark:text-white transition-all duration-300">
                        Login with github
                      </span>
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
            <div className="transition-all duration-300  lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
              {userData ? (
                <div className="transition-all duration-300 flex flex-col items-center justify-end text-center lg:pt-2">
                  <div className="relative flex justify-center items-center">
                    <div className="h-32 w-32 relative cursor-pointer mb-5 border-4  border-black dark:border-white">
                      <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                      <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                        <div className="h-full w-full  rounded-lg shadow-2xl">
                          <img
                            src={userData.data.data?.avatar_url}
                            alt="User Avatar"
                            className="transition-all duration-300 w-full  object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold text-black dark:text-white mb-2 ">
                    {" "}
                    {userData.data.data?.login}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </nav>
        </div>
      </div>

      
    </>
  );
};

export default Sidebar;
