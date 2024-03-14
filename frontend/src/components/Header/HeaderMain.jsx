import { useEffect, useState } from "react"
import logo from "../../logo/devopsfarm-logo-500x500.png"
import { getUserData } from "../../utils/apiUtils"


function HeaderMain() {
    const [userData , setUserData] = useState(null);
    const handleLogOut = () => {
          localStorage.removeItem('accessToken');
          window.location.href = 'http://localhost:3000/';
    }

    useEffect(() => {
        async function fetchData(){
            try {
                const accessToken = localStorage.getItem('accessToken');
                console.log("accessToken inside HeaderMain" , accessToken);
                if (accessToken) {
                    const userData = await getUserData();
                    setUserData(userData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData();
    } , [])
    
  return (
    <header className="bg-black text-white py-4 px-6 md:px-12 xl:px-40 flex flex-col md:flex-row items-center justify-between border-b border-gray-600">
            <div className="flex items-center">
                <img src={logo} loading="lazy" className="w-10 mr-2" alt="Devops "/>
                <h1 className="text-xl font-semibold">Devops Farm </h1>
            </div>
            <div className="hidden md:block">
            {userData && (
                        <div className="flex items-center">
                           
                            <img
                                src={userData.data?.avatar_url}
                                className="w-10 h-10 rounded-full mr-2 border-2 border-white"
                                alt="Avatar"
                                style={{ objectFit: 'cover' }} // Ensures the image covers the entire container
                            />
                            <p className="text-lg font-semibold text-gray-300">
                                <span className="bg-black px-2 py-1 rounded-md mr-2">{userData.data?.login}</span>
                            </p>
                            <button onClick={handleLogOut}  className ="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Logout</button>
                        </div>
                    )}
            </div>
    </header>
  )
}

export default HeaderMain   