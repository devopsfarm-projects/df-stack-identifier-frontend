import axios from "axios";

export async function getAccessToken(code){
  console.log("getAccessToken code " , code)
    const url = `http://localhost:8000/api/getAccessToken?code=${code}` ;
      try {
          console.log("url" , url)
          const response = await axios.get(url);
          console.log('Backend response:', response);
          console.log("Json responde " , response.data)
          // Assuming the access token is available in response.data.accessToken
          localStorage.setItem("accessToken", response.data.access_token);
          return response;
      } catch (error) {
          console.error('Error sending code to backend:', error);
      }
}

//User Data

export async function getUserData(){
    const token = localStorage.getItem('accessToken');
    console.log("Token in getUserData" , token);
    if (!token) {
      throw new Error('Access token not found in local storage');
    }
    const url = `http://localhost:8000/api/userInfoData`;
    try {
      const response = await axios.get(url , {
        headers : {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json",     
        }
      })
      console.log(response.data);
    } catch (error) {
      console.error('Error handling in getUserData' , error)
    }
}

// Repos Data

export async function getAllRepos() {
    const token = localStorage.getItem("accessToken");
    console.log("Token inside getAllRepos function" , token)
    if(!token) {
      throw new Error("Access Token find inside the getAllRepos function ")
    }
    const url = 'http://localhost:8000/api/getRepos'
    try { 
      const response =await axios.get(url , {
        headers : {
          "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json", 
        }
      })
      console.log("Repos Response" , response.data)
    } catch (error) {
      console.error("Error Handling in getAllRepos" , error)
    }
}


export async function getRepoContents() {
  const token = localStorage.getItem('accessToken');
  const url = `http://localhost:8000/api/repo-contents`;
  try {
    const response = await axios.get(url , {
      headers : {
        "Authorization" : `Bearer ${token}`,
          "Content-Type": "application/json", 
      }
    })
    console.log("Repo contents" , response.data)
  } catch (error) {
    console.error("Error Handling in getRepoContents" , error)
  }
}


