import { useEffect, useState} from "react";
import { Login , Footer , HeaderLogin , HeaderMain, MainSection} from "./components";

import Sidebar from "./Sidebar";
import { getAccessToken } from "./utils/apiUtils";



function App(){
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginAndSaveToken = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code');
        console.log("Authorization Code" , code)
        if (code) {
          const accessToken = await getAccessToken(code);
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
          <MainSection/>
          </>
        ) : (
            <Login />
        )}
    <Footer/>
    </>
  )
}

export default App;