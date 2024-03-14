import React, { useEffect, useState } from 'react';
import { getAllRepos, getRepoContents, getUserData } from '../utils/apiUtils';
import 'animate.css';


function Github() {

    
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
          console.log("UserData =  >>>>>> ", userData);
          setUserData(userData);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
  fetchData();
    }, []);



    const handleRepoSelect = async (repoName) => {
      setSelectedRepo(repoName);
      setLoadingFiles(true);
    };

  
    const Click = async () => {
      const username = selectedRepo.owner.login;
      const repoName = selectedRepo.name;
      if (username && repoName) {
        try {
          const repoContents = await getRepoContents(username, repoName);
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
  
  
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);
    
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
      setData(null);
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        getUser(searchQuery);
      }
    };
  
    const handleButtonClick = () => {
      getUser(searchQuery);
    };
  
    const getFiles = async (username, repoName) => {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          },
        });
  
        if (!response.ok) {
          throw new Error(`Failed to fetch files. Status: ${response.status}`);
        }
  
        const filesData = await response.json();
        setFiles(filesData);
      } catch (error) {
        setError(error.message);
      }
    };
  
    const APIURL = 'https://api.github.com/users/';
  
    const getUser = async (username) => {
      try {
        const response = await fetch(APIURL + username);
  
        if (!response.ok) {
          if (response.status === 403) {
            setError(`User "${username}" not found.`);
          } else {
            // setError(`API error: ${response.status}`);
          }
          return;
        }
  
        const userData = await response.json();
        setData(userData);
  
        const reposResponse = await fetch(APIURL + username + '/repos');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        setError(error.message);
      }
    };



 

  return (
   
       <div className="bg-white  ">
    
    <div className="px-6 mt-4 overflow-x-hidden lg:px-10">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex items-center">
          <span>
            <svg className="w-4 h-4 mr-2 text-gray-600 fill-current" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg>
          </span>
         
            <div className="text-xl font-medium text-blue-700 cursor-pointer hover:underline">
               {userData.name} 
            </div>
           
           </div>
       
        
        
      </div>
      <div className="flex items-center justify-between px-10 mt-6 -mx-10 border-b select-none md:mt-4">
        <div className="flex">
          <div className="flex items-center px-4 pb-2 text-sm border-b-2 border-orange-400 cursor-pointer">
            <svg className="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            Code</div>
          {/* <div className="flex items-center px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300">
            <svg className="hidden w-5 h-5 mr-1 text-gray-700 md:block" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Issues
            <span className="flex items-center justify-center w-6 h-6 p-1 ml-1 text-xs bg-gray-200 rounded-full">129</span>
          </div>
          <div className="flex items-center px-4 pb-2 text-sm border-b-2 border-transparent cursor-pointer hover:border-gray-300">
            <svg className="hidden w-5 h-5 mr-1 text-gray-600 fill-current md:block" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            Pull requests
            <span className="flex items-center justify-center w-6 h-6 p-1 ml-1 text-xs bg-gray-200 rounded-full">38</span>
          </div> */}
         
          
        </div>
        
      </div>

      
      
      <div className="container pb-10 mx-auto mt-8">
        
        <div className="md:flex">
        <div className="ml-4 md:w-1/4">
        <div  id="years" size="7" className="  border my-4   border-blue-500 overflow-hidden   text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5  dark:border-blue-500 dark:placeholder-gray-400   " >
          

        <div className="relative w-full">
            <input type="search" value={searchQuery}  onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              placeholder="Search username"
            id="search-dropdown" 
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"/>
            <button onClick={handleButtonClick} type="submit" className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            ><svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg></button>
       
</div>
   


      {error && <div className="error">{error}</div>}

      {data && (
  <select
    onChange={(e) => {
      const repoName = e.target.value;
      const selectedRepo = repos.find((repo) => repo.name === repoName);
      handleRepoSelect(selectedRepo);
      getFiles(data.login, repoName); // Call getFiles when an option is selected
    }}
    id="years" size="7" className=" border my-4  border-blue-500 overflow-hidden   text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5  dark:border-blue-500 dark:placeholder-gray-400   " >
    
    {repos.map((repo) => (
      <option key={repo.id} value={repo.name} className='text-base font-semibold cursor-pointer hover:bg-blue-200'>
        {repo.name}
      </option>
    ))}
  </select>
)}

   

        
    </div>
    </div>

          <div className="w-full mr-4 md:w-2/4 ml-8">
            <div className="my-4">
            {selectedRepo && ( 
              <div className="flex justify-between px-4 py-3 bg-indigo-100 border border-indigo-200 rounded-t-lg">
                <div className="flex items-center">
                
                
        <svg
          className="w-6 h-6 mx-2"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
    
                
                {selectedRepo &&  (
                <p className="text-sm font-semibold">{selectedRepo.full_name}</p>
                
                )}
                {selectedRepo &&  (

             <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">{selectedRepo.visibility}</span> 
                )}
                 {selectedRepo &&  (
                  <span className="ml-2 text-sm text-gray-600">{selectedRepo.created_at}</span>
                  )}
                </div>  

              </div>)}


             <div>
                  
             {files.length > 0 && (
  files
    .filter((file) => file.type === 'dir') // Adjust this condition based on your data structure
    .map((file) => (
      <div className="hidden text-center border-b border-l border-r rounded-b-lg md:block" key={file.path}>
        <div className="flex px-4 py-2 text-sm hover:bg-gray-200">
          <div className="flex w-1/4">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
            </svg>
            <p className="ml-2 cursor-pointer hover:underline hover:text-blue-500">{file.name}</p>
          </div>
          <p className="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Drop fs-extra version to..</p>
          <p className="w-1/4 text-right">{new Date(file).toLocaleString()}</p>
        </div>
      </div>
    ))
)}




{files.length > 0 && (
  files
    .filter((file) => file.type === 'file') // Adjust this condition based on your data structure
    .map((file) => (
      <div className="hidden text-center border-b border-l border-r rounded-b-lg md:block" key={file.path}>
        <div className="flex px-4 py-2 text-sm hover:bg-gray-200">
          <div className="flex w-1/4"
      
          >
          <svg className="w-6 h-6 text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
            <p className="ml-2 cursor-pointer hover:underline hover:text-blue-500">{file.name}</p>
          </div>
          <p className="w-1/2 text-left cursor-pointer hover:underline hover:text-blue-500">Drop fs-extra version to..</p>
          <p className="w-1/4 text-right">{new Date(file).toLocaleString()}</p>
        </div>
      </div>
    ))
)}
                              
            </div>


              <div className="py-2 text-center border-b border-l border-r rounded-b-lg md:hidden">
                <p className="text-blue-600 cursor-pointer hover:underline">View code</p>
              </div>
            </div>
            
          </div>
          <div className="ml-4 md:w-1/4">

          <select
          value={selectedRepo ? selectedRepo.name : ''}
          onChange={(e) => {
            const repoName = e.target.value;
            const selectedRepo = reposData.find((repo) => repo.name === repoName);
            handleRepoSelect(selectedRepo);
          }}
          id="years" size="11" className=" border my-4  border-blue-500 overflow-hidden   text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5  dark:border-blue-500 dark:placeholder-gray-400   " >
          
          {reposData.map((repo) => (
            <option key={repo.id} value={repo.name} className='text-base font-semibold cursor-pointer hover:bg-blue-200  ' onClick={Click} >
              {repo.name}
            </option>
          ))} 
        </select>

       




        {/* <button onClick={Click} className=" w-full  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Get Repo
           
            </button> */}
            
            {/* <div className="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
             
             
            </div> */}
              <div className="px-6 py-6 -mx-10 border-b md:mx-0 md:px-0">
              {/* <p className="text-base font-semibold text-black">Languages</p> */}
              {/* <div className="w-full mt-4 bg-yellow-500 rounded-full shadow">
                <div className="w-11/12 py-1 text-xs leading-none text-center text-white bg-purple-800 rounded-full"></div>
              </div> */}
              <div className="flex mt-4">
                {/* <div className="flex items-center text-sm">
                  <div className="w-2 h-2 mr-2 bg-purple-800 rounded-full"></div>
                  CSS 94.1 %
                </div> */}
                {/* <div className="flex items-center ml-4 text-sm">
                  <div className="w-2 h-2 mr-2 bg-yellow-500 rounded-full"></div>
                  Javascript 5.9%
                </div> */}
              </div>
            </div>
          </div>
        </div>
       
      
      </div>
    </div>
</div>



   
  );
}


export default Github;
