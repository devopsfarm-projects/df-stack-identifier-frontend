import React, { useEffect, useState } from 'react';
import { getAllRepos, getRepoContents, getUserData } from '../utils/apiUtils';

function ReposData() {
  const [reposData, setReposData] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [errorRepos, setErrorRepos] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [filesData, setFilesData] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [errorFiles, setErrorFiles] = useState(null);
  const [files, setFiles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

   const handleRepoSelect = async (repoName) => {
     setSelectedRepo(repoName);
     setLoadingFiles(true);
   };

   const handleLogin = async (code) => {
    //console.log("Inside Handle Login with Authorization code", code);
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
    const fetchReposData = async () => {
      try {
        const reposData = await getAllRepos();
        setReposData(reposData);
        setLoadingRepos(false);
      } catch (error) {
        console.error("Error fetching repos data:", error);
        setErrorRepos(error.message || "Error fetching repos data");
        setLoadingRepos(false);
      }
    };
    fetchReposData();
  }, []);


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

    
  }, []);

  const Click = async () => {
    const userData = await getUserData();
    const username = userData?.login;
    const repoName = selectedRepo.name;
    if (username && repoName) {
      try {
        const repoContents = await getRepoContents(username, repoName);
       // console.log('Repository contents:', repoContents);
       setFiles(repoContents);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error('Repository not found. Make sure the repository exists.');
        } else if (error.response && error.response.status === 403) {
          console.error('Permission denied. Make sure you have access to the repository.');
        } else {
          console.error('Error fetching repository contents:', error.message || error);
        }
      }
    } else {
      console.error('Username or repository name is undefined');
    } 
  };




  return (


    



    <div id="body" className="bg-slate-50 h-screen flex items-center justify-center ">
      <div >

        {loadingRepos && <div>Loading repositories...</div>}
        {errorRepos && <div>Error fetching repositories: {errorRepos}</div>}

       
         


        <select
          value={selectedRepo ? selectedRepo.name : ''}
          onChange={(e) => {
            const repoName = e.target.value;
            const selectedRepo = reposData.find((repo) => repo.name === repoName);
            handleRepoSelect(selectedRepo);
          }}
          id="years" size="8" class="bg-white overflow-hidden  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
          
          {reposData.map((repo) => (
            <option key={repo.id} value={repo.name}>
              {repo.name}
            </option>
          ))} 
        </select>

       
        <button onClick={Click} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-black dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:white rounded-md group-hover:bg-opacity-0">
           Get Repo
            </span>
            </button>

             {files.length > 0 && (
    <ul>
      {files.map((file) => (
        <li key={file.path}>{file.name}</li>
      ))}
    </ul>
  )}
       
       
      </div>
      
    </div>
  );
}

export default ReposData;













