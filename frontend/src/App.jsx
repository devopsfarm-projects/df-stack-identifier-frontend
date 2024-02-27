import { useEffect, useState} from "react";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import { getUserData , getAllRepos , getAccessToken} from "./utils/apiUtils";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App(){ 
  const handleLogin = async (code) => {
    console.log("Inside Handle Login for with Authorization code" , code);
    try {
      const response = await getAccessToken(code);
      console.log("Response" , response)
      if (response) {
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
    console.log("Authorization Code" , code)
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
            <Header/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get User Data</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getAllRepos}>Get Repos</button>
            <Logout />
            <Footer/>
            
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