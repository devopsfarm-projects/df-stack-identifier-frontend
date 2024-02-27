import { useEffect, useState} from "react";
import Login from "./components/Login";
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
            <Footer/>
            
          </div>
        ) : (
          <Login />
        )}
      </>
   
    </div>
    
    </>
  )
}

export default App;