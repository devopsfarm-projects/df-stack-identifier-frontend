const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
import character from "../../Image/Character-working-laptop-sitting-chair.png"
import { useState } from "react";
const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin =() => {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo%20user&20repo_deployment`;
        setIsAuthenticated(true);
    };

    return (
        <>
            <div className="transition-all duration-300 relative py-2 bg-white text-black            dark:bg-black dark:text-white flex items-center justify-center">
                <div className="container flex flex-col md:flex-row mx-auto px-5 text-gray-500 md:px-13 xl:px-40">
                    <div className="md:w-1/2 mr-8">
                        <img src={character} alt="Image" className="w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <div className="transition-all duration-300 rounded-xl bg-white dark:bg-black shadow-xl">
                            <div className="p-6 sm:p-16">
                                <div className="space-y-4">
                                    <h2 className="mb-8 text-5xl font-bold">Welcome To Devops Farm</h2>
                                    <p className="text-lg">Devops Farm is a platform dedicated to providing resources, tools, and community support for DevOps professionals and enthusiasts.</p>
                                </div>
                                <div className="mt-16 grid space-y-4">
                                    <button className="group h-12 px-6 border-2 border-black dark:border-white rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" onClick={handleLogin}>
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-black dark:text-white" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                            <span className="block w-max font-semibold tracking-wide text-black dark:text-white text-sm transition duration-300 group-hover:text-blue-300 sm:text-base">Continue with Github</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Login