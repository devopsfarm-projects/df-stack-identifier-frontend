import axios from "axios";


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

