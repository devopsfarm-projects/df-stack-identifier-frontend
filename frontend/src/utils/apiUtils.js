import axios from "axios";

export async function getAccessToken(code){
  console.log("getAccessToken code " , code)
    const url = `http://localhost:8000/api/v1/users/authorization?code=${code}` ;
      try {
          const response = await axios.get(url);
          console.log("response.data.data.access_token)" , response.data.data.access_token );
          // Assuming the access token is available in response.data.accessToken
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
      })
      console.log("Repos List " , response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error Handling in getAllRepos" , error)
    }
}


export async function getRepoContents() {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await axios.get(`api/v1/users/reposContent`, {
      headers : {
        "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json", 
      }
    })
    console.log("Repo contents" , response)
  } catch (error) {
    console.error("Error Handling in getRepoContents" , error)
  }
}


