import { getUserData, getAllRepos, getRepoContents } from "../utils/apiUtils";
import { useEffect, useState } from "react";
import ReposData from "./RepoData";
function User() {
  
  const[userData , setUserData] = useState([])
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const userData = await getUserData() ;
  //     console.log("UserData => " , userData)
  //     setUserData(userData)
  //   }
  //   fetchData()
  // } , [])

  useEffect(() => {
    const fetchReposData = async () => {
      try {
        const reposData = await getAllRepos();
      //  console.log("Reposdata", reposData);
        setReposData(reposData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos data:", error);
        setError(error.message || "Error fetching repos data");
        setLoading(false);
      }
    };
    fetchReposData();
  }, []);

  const handleRepoSelect = (repo) => {
    setSelectedRepo(repo);
  };

  

  return (
   
     <div id="body" className="bg-slate-50 h-screen flex">
    <nav className="bg-white w-80 h-screen flex flex-col gap-10 border-r border-slate-100">
        {/* <div className="logo text-2xl font-bold text-center h-16 flex items-center justify-center">{userData.login}</div>
        <div className="user flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-4">
            <img className=" w-4/5 rounded-full shadow-xl" src={userData.avatar_url}/>
            
            <div className="flex flex-col items-center">
                <span className="font-semibold text-lg text-emerald-700">{userData.name}</span>
                <span className="text-slate-400 text-sm">Bio : {userData.bio}</span>
            </div>
            <div className="text-sm text-slate-400">
                <span className="font-semibold text-slate-500">{userData.id}</span> (20)
            </div>
        </div> */}

       

      
            {/* {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
        <ul className="px-6 space-y-2">
        {reposData.map((repo) => (
           <li key={repo.id} onClick={() => handleRepoSelect(repo)}>
                <a className="block px-4 py-2.5 text-slate-800 font-semibold  hover:bg-emerald-950 hover:text-white rounded-lg" href="#"> {repo.name}</a>
            </li>
                   ))}
  </ul> */}
  
  
 
    </nav>
    <div className="right w-full flex gap-2 flex-col">
        <header className="h-16 w-full flex items-center p-4 text-slate-400">
           
        </header>

       <center> <div className="p-4">
        <ReposData/>
         </div></center>
    </div>
<div></div>
    </div>
  );
};

export default User;
