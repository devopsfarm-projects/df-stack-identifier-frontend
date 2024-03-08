import axios from "axios";

<<<<<<< HEAD

export async function getAccessToken(code) {
  try {
    const url = `http://localhost:8000/api/getAccessToken?code=${code}`;
    const response = await axios.get(url);

    if (response.status === 200 && response.data.access_token) {
      const accessToken = response.data.access_token;
      localStorage.setItem("accessToken", accessToken);

      // Call getUserData and getAllRepos automatically after getting the access token
      await getUserData();
      await getAllRepos();
      
      console.log('Access token obtained:', accessToken);
      return response;
    } else {
      throw new Error('Failed to get access token');
    }
  } catch (error) {
    console.error('Error getting access token:', error);
  }
}

// User Data
export async function getUserData() {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('Access token not found in local storage');
  }

  try {
    const response = await axios.get('/api/userInfoData', {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });

    console.log('User data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error handling in getUserData', error);
  }
}

// Repos Data


export async function getAllRepos() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    throw new Error("Access Token not found in local storage");
  }

  try {
    const response = await axios.get('/api/getRepos', {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    });

    console.log('Repos data:', response.data);
    return response.data
=======
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
>>>>>>> origin/main
  } catch (error) {
    console.error('Error handling in getAllRepos', error);
  }
}

// export async function getRepoContents() {
//   const token = localStorage.getItem('accessToken');
//   const url = `http://localhost:8000/api/repo-contents`;
//   try {
//     const response = await axios.get(url , {
//       headers : {
//         "Authorization" : `Bearer ${token}`,
//           "Content-Type": "application/json", 
//       }
//     })
//     console.log("Repo contents" , response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error Handling in getRepoContents" , error)
//   }
// }




export async function getRepoContents(username, repoName) {
  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    throw new Error('Access token not found in local storage');
  }

  try {
    const response = await axios.get(`/api/repo-contents`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: { username, repoName }, 
    });

    console.log('Repository files:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error handling in getUserRepoFiles', error);
    throw error; 
  }
}

