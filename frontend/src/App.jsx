import { useEffect, useState} from "react";
import { Login , Footer , HeaderLogin , HeaderMain, MainSection} from "./components";
import { getUserData , handleLogin , getRepoContents, getAllRepos} from "./utils/apiUtils";


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
          <div>
            <HeaderMain/>
            <MainSection/>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get User Data</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " onClick={getAllRepos} >Get Repos</button>
            <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getRepoContents}>Get Repos Contents(Devops_farms)</button> */}
            {/* <ReposData/> */}
            <Footer/>
          </div>
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