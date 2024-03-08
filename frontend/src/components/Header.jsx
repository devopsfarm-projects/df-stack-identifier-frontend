import { getUserData, getAllRepos } from "../utils/apiUtils"
import Logo from './devopsfarm-hires-logo.png';
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
import { useEffect, useState } from "react";

function Header() {

    const handleLogin =() => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo%20user&20repo_deployment`;
    };

    const handleLogout = () => {
        const isConfirmed = window.confirm('Are you sure you want to log out?');

        if (isConfirmed) {
            localStorage.removeItem('accessToken');
       
            window.location.href = 'http://localhost:3000/';
        }
       
        
      };

      const [isLoggedIn, setIsLoggedIn] = useState(false);

      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    
        if (code) {
          // Perform login logic and set access token
          setIsLoggedIn(true);
        } else {
          const accessToken = localStorage.getItem('accessToken');
          setIsLoggedIn(accessToken !== null);
        }
      }, []);

  return (
    <>

    <header className="pb-6 bg-white lg:pb-0 border-b-2 border-black-400 ">
    <div className="px-4 mx-10 max-w-7xl sm:px-6 lg:px-6">
        
        <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
                <a href="https://www.devopsfarm.in/" title="" className="flex">
                    <img className="w-auto h-10 lg:h-10" src={Logo} alt="" />
                </a>
            </div>

            <button type="button" className=" hidden  p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>

                <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"onClick={getUserData}> Get user data  </a>

                <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600" onClick={getAllRepos}> Get all reps </a>
            </div>

            <button href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button" onClick={handleLogout} style={{ display: isLoggedIn ? 'inline-flex' : 'none' }}>Logout</button>
              </nav>

        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"onClick={getUserData}> Get user data </a>

                    <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"onClick={getAllRepos}> Get all reps </a>
                </div>
            </div>

           
        </nav>
    </div>
</header>
    </>
  )
}

export default Header


