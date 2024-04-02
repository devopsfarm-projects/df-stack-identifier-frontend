import logo from "../../logo/devopsfarm-logo-500x500.png"
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
function Header() {
  const [theme, setTheme] = useState("dark");

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

  return (
    <>
        <header className={`transition-all duration-300 ${theme === "dark" ? "dark:bg-black dark:text-white" : "bg-white text-black"} py-4 px-6 md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600`}>
      <div className="flex items-center">
        <img src={logo} loading="lazy" className="w-10 mr-2" alt="logo"/>
        <h1 className="text-xl font-semibold">Devops Farm </h1>
      </div>
      <div className="hidden md:flex items-center">
        <a href="#" className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 mr-4 rounded">Contact Us</a>
        <a href="#" onClick={handleThemSwitch} className="bg-gray-400 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </a>
      </div>
    </header>
    </>
  )
}

export default Header


