import { useEffect, useState} from "react";
import Login from "./components/Login";
import { getUserData , getAllRepos , getAccessToken, getRepoContents} from "./utils/apiUtils";
import Footer from "./components/Footer";
import Navigation from './components/Navigation';
// import User from "./components/UserDetails";
// import RepoData from "./components/RepoData";
import Github from "./components/Github";

function App(){ 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = async (code) => {
   // console.log("Inside Handle Login with Authorization code", code);
    try {
      const response = await getAccessToken(code);
      console.log("Response", response);
      if (response) {
        localStorage.setItem("accessToken", response.data.access_token);
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
          <>
             <Navigation />
              <Github/>
            {/* <User userData={userData} /> */}
          </>
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