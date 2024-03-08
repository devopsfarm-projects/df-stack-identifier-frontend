import img005 from './imge/005.jpg';
import img012 from './imge/012.jpg';
import img024 from './imge/024.jpg';
import img029 from './imge/029.jpg';
import img032 from './imge/032.jpg';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

import { Disclosure } from '@headlessui/react'



const Login = () => {

    const handleLogin =() => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo%20user&20repo_deployment`;
    };

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
<<<<<<< HEAD


      
<Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">


            <div className="relative flex h-16 items-center justify-between">
             
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
                        className={(
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

            </div>
          </div>
        </>
      )}
    </Disclosure>



<section className="w-full flex bg-gray-50 dark:bg-gray-700">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="text-center space-y-5">
      <h2 className="text-base font-semibold text-pink-400 dark:text-pink-300 tracking-wide uppercase">Unlock Your Potential
        Today</h2>
       <div className="inline-flex items-end justify-center w-full text-center mx-auto">
        <img src={img005} className="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"/>
        <img src={img012} className="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white"/>
        <img src={img024} className="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
        <img src={img029} className="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white"/>
        <img src={img032} className="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative"/>
      </div> 
      <p
        className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
        Discover
        <span className="px-2 py-1 relative inline-block"><svg className="stroke-current bottom-0 absolute text-blue-300 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" strokeWidth="12" fill="none" fillRule="evenodd" strokeLinecap="round"></path></svg><span className="relative">Your True Potential</span></span>
      </p>
      <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Take the leap and unleash your
        capabilities. Experience
        one week of unlimited access on us and witness the transformation.</p>
        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
=======
            <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4">
                                    <img src="" loading="lazy" className="w-10" alt="tailus logo"/>
                                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Welcome To the <br/>Devops Farm</h2>
                                </div>
                                <div className="mt-16 grid space-y-4">
                                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
>>>>>>> origin/main
                                        hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                                        onClick={handleLogin}
                                    >
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="absolute left-0 w-5 text-gray-700" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            <span className="px-12 block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                                        </div>
                                    </button>
    </div>
  </div>
</section>


          
            

            
        </>
    )
}

export default Login