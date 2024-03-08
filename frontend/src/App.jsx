import { useEffect, useState} from "react";
import Login from "./components/Login";
<<<<<<< HEAD
import { getUserData , getAllRepos , getAccessToken, getRepoContents} from "./utils/apiUtils";
import Footer from "./components/Footer";
import Navigation from './components/Navigation';
// import User from "./components/UserDetails";
// import RepoData from "./components/RepoData";
import Github from "./components/Github";
=======
import Logout from "./components/LogOut";
import { getUserData ,  getAccessToken , getRepoContents, getAllRepos} from "./utils/apiUtils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReposData from "./components/ReposData"

>>>>>>> origin/main

function App(){ 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (code) => {
<<<<<<< HEAD
   // console.log("Inside Handle Login with Authorization code", code);
    try {
      const response = await getAccessToken(code);
      console.log("Response", response);
      if (response) {
        localStorage.setItem("accessToken", response.data.access_token);
=======
    try {
      const response = await getAccessToken(code);
      if (response) {
        localStorage.setItem('accessToken', response.data.data.access_token);
>>>>>>> origin/main
        setIsLoggedIn(true);
      } else {
        console.error("Failed to obtain access token");
      }
    } catch (error) {
      console.error("Error handling login:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
       // console.log("UserData =>>> ", userData);
        setUserData(userData);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    console.log("Authorization Code", code);

    if (code) {
      handleLogin(code);
    } else {
      const accessToken = localStorage.getItem("accessToken");
     // console.log("Access Token from Local Storage:", accessToken);
      if (accessToken) {
        fetchData();
      } else {
        setIsLoggedIn(false);
      }
    }
  }, []);




  


return(
  <>
  <div>
    <>
      <div>
        {isLoggedIn ? (
<<<<<<< HEAD
          <>
             <Navigation />
              <Github/>
            {/* <User userData={userData} /> */}
          </>
=======
          <div>
            <Header/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserData}>Get User Data</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded " onClick={getAllRepos} >Get Repos</button>
            <button className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={getRepoContents}>Get Repos Contents(Devops_farms)</button>
            <ReposData/>
            <Logout />
            <Footer/>
          </div>
>>>>>>> origin/main
        ) : (
          <Login />
        )}
       
        <Footer />
      </div>
    </>
  </div>
</>
  )
}

export default App;