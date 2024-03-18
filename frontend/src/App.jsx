import { useEffect, useState} from "react";
import { Login , Footer , HeaderLogin , HeaderMain, MainSection} from "./components";
import {handleLogin } from "./utils/apiUtils";


function App(){
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginAndSaveToken = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code');
        console.log("Authorization Code" , code)
        if(code){
          await handleLogin(code);
          setIsLoggedIn(true)
        }else {
          const accessToken = localStorage.getItem('accessToken');
          setIsLoggedIn(accessToken !== null);
        }
      } catch (error) {
        console.error('Error handling login:', error);
      }
    }
    loginAndSaveToken();
  } , []);


return(
    <>
        {isLoggedIn ? (
          <>
            <HeaderMain/>
            <MainSection/>
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