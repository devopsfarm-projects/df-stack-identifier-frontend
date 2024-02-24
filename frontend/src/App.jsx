import { useEffect, useState} from "react";
import { getAccessToken } from "./utils/apiUtils";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import { getUserData } from "./utils/apiUtils";
import { getAllRepos } from "./utils/apiUtils";



function App(){
  const handleLogin = async (code) => {
    try {
      const response = await getAccessToken(code);
      if (response && response.data && response.data.access_token) {
        localStorage.setItem('accessToken', response.data.access_token);
        setIsLoggedIn(true);
      } else {
        console.error('Failed to obtain access token');
      }
    } catch (error) {
      console.error('Error handling login:', error);
    }
  }

  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code');
    if(code){
      handleLogin(code);
    }else {
      const accessToken = localStorage.getItem('accessToken');
      setIsLoggedIn(accessToken !== null);
    }

  } , []);


return(
    <>
     <div>
      <>
        {isLoggedIn ? (
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get User Data</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getAllRepos}>Get Repos</button>
            <Logout />
          </div>
        ) : (
          <Login />
        )}
      </>
      {/* Other components or content */}
    </div>
    
    </>
  )
}

export default App;