import { useEffect, useState} from "react";
import { Login , Footer , HeaderLogin , HeaderMain} from "./components";
import Logout from "./components/LogOut";
import { getUserData , handleLogin , getRepoContents, getAllRepos} from "./utils/apiUtils";


function App(){
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code');
    console.log("Authorization Code" , code)
    if(code){
      handleLogin(code);
      setIsLoggedIn(true)
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
            <HeaderMain/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get User Data</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " onClick={getAllRepos} >Get Repos</button>
            <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getRepoContents}>Get Repos Contents(Devops_farms)</button>
            {/* <ReposData/> */}
            <Logout />
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
      {/* Other components or content */}
    </div>
    
    </>
  )
}

export default App;