const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
import { useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { getUserData } from "../utils/apiUtils";


function Navigation() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[userData , setUserData] = useState([null])
  const [loading, setLoading] = useState(true);
  


  
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


      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
       // console.log('Code from URL:', code);
    
    
        const fetchData = async () => {
          const userData = await getUserData() ;
        //  console.log("UserData =>>> " , userData)
          setUserData(userData)
          setLoading(false);
        }
        fetchData();
    
        if (code) {
          
          setIsLoggedIn(true);
        } else {
          const accessToken = localStorage.getItem('accessToken');
          console.log('Access Token from Local Storage:', accessToken);
          setIsLoggedIn(accessToken !== null);
        }
    
     
      }, []);


      const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]

      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }


  return (
    <>

<Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">


            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                
              
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">

                <svg
        className="w-9 h-9" 
        viewBox="0 0 16 16"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </svg>



                </div>

  
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined} 
                        
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                {loading && <div>Loading...</div>}
             
      
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      
                      <img
                        className="h-8 w-8 rounded-full"
                        style={{ display: isLoggedIn ? 'inline-flex' : 'none' }}
                        src= {userData.avatar_url}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                     
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Name : {userData.name}<br/>
                            UserName : {userData.login}<br/>
                            User Id : {userData.id}
                          </a>
                        )}
                      </Menu.Item> 
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'w-full bg-gray-100  items-center justify-center' : '', 'items-center justify-center w-full block px-4 py-2 text-sm text-gray-700')}
                            onClick={handleLogout} style={{ display: isLoggedIn ? 'inline-flex' : 'none' }}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
  )
}

export default Navigation
