import logo from "../../logo/devopsfarm-logo-500x500.png"

function Header() {
  return (
    <>
        <header className="bg-black text-white py-4 px-6 md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600">
            <div className="flex items-center">
                <img src={logo} loading="lazy" className="w-10 mr-2" alt="logo"/>
                <h1 className="text-xl font-semibold">Devops Farm </h1>
            </div>
            <div className="hidden md:block">
                <a href="#" className="text-sm border-b border-transparent hover:border-blue-400 transition-colors">Contact Us</a>
            </div>
        </header>
    </>
  )
}

export default Header


