import { useEffect, useState} from "react";
import { Login , Footer , HeaderLogin , HeaderMain, MainSection} from "./components";
import {handleLogin } from "./utils/apiUtils";
import Sidebar from "./Sidebar";



function App(){
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginAndSaveToken = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code');
        console.log("Authorization Code" , code)
        if (code) {
          const accessToken = await handleLogin(code);
          if (accessToken) {
            setIsLoggedIn(true);
          } else {
            console.error('Failed to obtain access token');
          }
        } else {
          const accessToken = localStorage.getItem('accessToken');
          setIsLoggedIn(accessToken !== null);
        }
      } catch (error) {
        console.error('Error handling login:', error);
      }
    };
    loginAndSaveToken();
  } , []);


return(
    <>
        {isLoggedIn ? (
          <>
          <Sidebar/>
            <HeaderMain/>
           <div className="min-h-96"><MainSection/></div> 
            <Footer/>
          </>
        ) : (
          <div>
           
            <HeaderLogin/>
            <Login />
            <Footer/>
          </div>
          
        )}
    
    </>
  )
}

export default App;