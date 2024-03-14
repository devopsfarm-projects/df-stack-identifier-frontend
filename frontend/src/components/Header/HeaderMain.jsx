import { useEffect, useState } from "react"
import logo from "../../logo/devopsfarm-logo-500x500.png"
import { getUserData } from "../../utils/apiUtils"


function HeaderMain() {
    const [userData , setUserData] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try {
                const accessToken = localStorage.getItem('accessToken');
                console.log("accessToken" , accessToken);
                if (accessToken) {
                    // If access token is available, fetch user data
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
                {userData && <p className="text-sm">{userData.data?.login}</p>}
            </div>
    </header>
  )
}

export default HeaderMain   