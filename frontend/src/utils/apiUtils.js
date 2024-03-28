import axios from "axios";

//handle login
export async function handleLogin(code){
  try {
    const response = await getAccessToken(code);
    if (response) {
      localStorage.setItem('accessToken', response.data.data.access_token);
    } else {
      console.error('Failed to obtain access token');
    }
  } catch (error) {
    console.error('Error handling login:', error);
  }
}

//for Access Token
export async function getAccessToken(code){
    const url = `api/v1/users/authorization?code=${code}` ;
      try {
          const response = await axios.get(url);
          localStorage.setItem("accessToken", response.data.data.access_token);
          return response;
      } catch (error) {
          console.error('Error sending code to backend:', error);
      }
}

//User Data
export async function getUserData(){
    const token = localStorage.getItem('accessToken');
    try {
      const response = await axios.get(`api/v1/users/userInformation` , {
        headers : {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json",     
        }
      });
      return response.data
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
          "Authorization" : `Bearer ${token}`,
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
        "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json", 
      },
      params : {
        userLogin : userLogin,
        repoName : repoName
      }
    })
    // console.log("Repoconents in getRepoContents" , response.data.data[0].language)
    return response
  } catch (error) {
    console.error('Error handling in getAllRepos', error);
  }
}


