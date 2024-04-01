import { useEffect, useState } from "react";
import { getAllRepos, getRepoContents, getUserData } from "../../utils/apiUtils";
import { RiGitRepositoryLine } from "react-icons/ri";  
import { FaLanguage } from "react-icons/fa6";
import { SiFramework7 } from "react-icons/si";
import { IoBuild } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiWebpack } from "react-icons/si";
function MainSection() {
    const [userData, setUserData] = useState(null);
    const [reposList, setReposList] = useState([]);
    const [selectedRepoName, setSelectedRepoName] = useState('');
    const [frameWorkUsed, setFrameworks] = useState([]);
    const [Language, setLanguage] = useState([]);
    const [Name, setName] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const accessToken = localStorage.getItem('accessToken');
                console.log("accessToken inside MainSection", accessToken);
                if (accessToken) {
                    const userData = await getUserData();
                    setUserData(userData);

                    const reposList = await getAllRepos();
                    setReposList(reposList);

                }
            } catch (error) {
                console.error("Error Handling in fetching Data in MainSection", error);
            }
        }
        fetchData();
    }, []);

    const handleRepoSelect = async (repo) => {
      try {
        if (repo) {
          const frameworks = await getRepoContents(repo.owner.login, repo.name);
          const frameWorkUsed = frameworks.data.data.buildTool;
          const Language = frameworks.data.data.language;
          const Name = frameworks.data.data.name;
          setName(Name)
          console.log("Name",Name)
          setLanguage(Language);
          console.log("Language", Language);
          setFrameworks(frameWorkUsed);
          console.log("buildTool", frameWorkUsed);

          setSelectedRepoName(repo.full_name);
        }
      } catch (error) {
        console.error("Error handling repository selection:", error);
      }
    };




    return (
        <div className={'grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white text-black dark:bg-black dark:text-white  ' } style={{ minHeight: '478px' }}>
       <div className="lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
    {userData ? (
        <div className="transition-all duration-300  flex flex-col items-center justify-end text-center lg:pt-28">


                                                                                          {/* <span className="relative items-center flex  ">
                                                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-95"></span>
                                                                                            <img src={userData.data.avatar_url} alt="User Avatar" className="w-28 h-22 rounded-full mb-2 self-center" />
                                                                                            
                                                                                          </span> */}


            {/* <img src={userData.data.avatar_url} alt="User Avatar" className="transition-all duration-300  w-28 h-22 rounded-full mb-2 self-center" /> */}
            {/* <div className="transition-all duration-300 text-lg font-semibold">Name: {userData.data?.login}</div>
            <div className="transition-all duration-300 ">Followers: {userData.data.followers}</div>
            <div className="transition-all duration-300 ">Public Repos: {userData.data.public_repos}</div>
             <div className="transition-all duration-300 ">Private Repos: {userData.data.total_private_repos}</div> */}
        </div>
    ) : (
        <div className="transition-all duration-300  border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto  ">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )}
</div>
{userData ? (
        <div className="transition-all duration-300  lg:col-span-1 pt-9 pl-12">
        <div className="flex-col flex items-center justify-end pl-4">
          <h2 className="transition-all duration-300 text-xl font-bold mb-4">Repository List</h2>
          <div className="transition-all duration-300 overflow-y-auto scroll-smooth focus:scroll-auto max-h-80 mb-0.5 scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
  <ul className="pl-0">
    {reposList.map(repo => (
      <li key={repo.id} className=" flex items-center mb-2 cursor-pointer" onClick={() => handleRepoSelect(repo)}>
        <RiGitRepositoryLine className="mr-2" />
        <p className=" relative flex flex-col    lg:w-96 rounded-xl bg-clip-border">{repo.full_name}</p>
      </li>
    ))}
  </ul>
</div>
        </div>
      </div>
      
        ):(
          <h1 className="text-xl md:text-7xl font-bold flex justify-center items-center">
          <svg aria-hidden="true" className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
      </h1>
        )}

{userData ? (
        <div className="transition-all duration-300 lg:col-span-1 pt-12 pl-12">
           <div className="flex-col flex items-center justify-end pl-4 pb-8">
                <h2 className="text-xl font-bold mb-4">DevOps Tools Stack</h2>
           
           {selectedRepoName && <div className="py-3 px-4 font-bold flex items-center flex-shrink-0"><RiGitRepositoryLine className="mr-2" />{selectedRepoName}</div>}
            
 
    <table className="transition-all duration-300  min-h-full shadow-md rounded-xl">
      
      <tbody className=" text-blue-gray-900">
        <tr className="border-b border-blue-gray-200 flex flex-wrap">
        <th className="py-3 px-4 flex items-center flex-shrink-0">
           <SiFramework7 className="mr-2" /> 
          Framework:</th>
          <td className="py-3 px-4  flex items-center flex-shrink-0 " >
            {/* <TbBrandReact />  */}
            <ul className="flex">
  {Name && Name.length > 0 ? (
    Name.map((item, index) => (
      <li className="mr-3" key={index}>{item}</li>
    ))
  ) : (
    <li className="text-gray-500">Null</li>
  )}
</ul>
      </td>
          
        </tr>
        <tr className="border-b border-blue-gray-200  flex flex-wrap">
        <th className="py-3 px-4 flex items-center flex-shrink-0"><FaLanguage className="mr-2" />Language:</th>
          <td className="py-3 px-4 flex items-center flex-shrink-0">
            {/* <TbBrandJavascript />  */}
            <ul className="flex">
  {Language && Language.length > 0 ? (
    Language.map((item, index) => (
      <li className="mr-3" key={index}>{item}</li>
    ))
  ) : (
    <li className="text-gray-500">Null</li>
  )}
</ul>

          </td>
       
        </tr>
        <tr className="border-b border-blue-gray-200 flex flex-wrap">
  <th className="py-3 px-4 flex items-center flex-shrink-0">
     <IoBuild className="mr-2" /> 
    Build Tool:
  </th>
  <td className="py-3 px-4 flex items-center flex-shrink-0">
    {/* <SiWebpack className="mr-2" /> */}

    <ul className="flex">
  {frameWorkUsed && frameWorkUsed.length > 0 ? (
    frameWorkUsed.map((item, index) => (
      <li className="mr-3" key={index}>{item}</li>
    ))
  ) : (
    <li className="text-gray-500">Null</li>
  )}
</ul>
   
  </td>
</tr>


      </tbody>
    </table>

   

    </div>
    </div> 

     
        
        ):(
            <div className="transition-all duration-300 border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
       )}
    </div>
    
    )
}

export default MainSection;
