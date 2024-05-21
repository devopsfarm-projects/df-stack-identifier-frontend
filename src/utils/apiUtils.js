import axios from "axios";

//for Access Token
export async function sendCodeToBackend(code){
      try {
        console.log("try Code in getAccessToken" , code);
        const url = `api/v1/users/authorization?code=${code}`
        const response = await axios.get(url);
        console.log("Response from backend" , response);
        const token = response.data.data.accessToken;
        return token

        // Set the token in Local Storage
        // localStorage.setItem('accessToken' , `Bearer ${token}`);
      } catch (error) {
          console.error('Error sending code to backend:', error);
          throw error;
      }
}

//User Data
export async function getUserData(){
    const token = localStorage.getItem('accessToken');
    try {
      const response = await axios.get(`api/v1/users/userInformation` , {
        headers : {
          "Authorization" : token,
          "Content-Type": "application/json",     
        }
      });
      return response
    } catch (error) {
      console.error('Error handling in getUserData' , error)
    }
}

// Repos Data
export async function getAllRepos() {
    const token = localStorage.getItem("accessToken");
    if(!token) {
      throw new Error("Access Token find inside the getAllRepos function ")
    }
    try { 
      const response = await axios.get('/api/v1/users/reposList' , {
        headers : {
          "Authorization" : token,
          "Content-Type": "application/json", 
        }
      });
      return response.data.data;
    } catch (error) {
      console.error("Error Handling in getAllRepos" , error)
    }
}


export async function getRepoContents(userLogin, repoName) {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await axios.get(`api/v1/users/reposContent`, {
      headers : {
        "Authorization" : token,
          "Content-Type": "application/json", 
      },
      params : {
        userLogin : userLogin,
        repoName : repoName
      }
    })
    console.log("Devops ToolStack " , response.data.data);
    return response
  } catch (error) {
    console.error('Error handling in getAllRepos', error);
  }
}


export function handleThemeSwitch(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

//For Logout user
export async function logoutUser(){
  try {
    const token = localStorage.getItem('accessToken');
    console.log("Token in logout user" , token)
    const reponse = await axios.post('api/v1/users/logout' ,null ,
    {
      headers : {
        "Authorization" : token,
      }
    })
    console.log("Response logout user" , reponse);
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.error("Error in Loggin out user")
  }
}

