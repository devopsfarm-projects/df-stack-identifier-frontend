import { useEffect, useState} from "react";
import { Login , Footer ,MainSection} from "./components";
import { sendCodeToBackend } from "./utils/apiUtils";
import Home from "./components/Home/Home";
import Logout from "./components/Logout/Logout";
import {useNavigate} from 'react-router-dom';

function App(){
  const navigate = useNavigate();
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginAndSaveToken = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code');
        console.log("Authorization Code" , code);
        if (code) {
          await sendCodeToBackend(code);
          
        }else{
          console.log("Code is not present in URL")
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
          <>
          <Login />
          <Home/>
          <Logout/>
          </>
            
        )}
    <Footer/>
    </>
  )
}

export default App;