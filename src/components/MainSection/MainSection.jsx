import { useEffect, useState } from "react";
import {
  getRepoContents,
  getAllRepos,
  getUserData,
} from "../../utils/apiUtils";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa6";
import { SiFramework7 } from "react-icons/si";
import { IoBuild } from "react-icons/io5";
import ProcessingDataSpinner from "../ProcessingDataSpinner/ProcessingSpinner";

function MainSection() {
  const [userData, setUserData] = useState(null);
  const [reposList, setReposList] = useState([]);
  const [selectedRepoName, setSelectedRepoName] = useState("");
  const [buildTool, setBuildtool] = useState([]);
  const [Language, setLanguage] = useState([]);
  const [Name, setName] = useState([]);
  const [loading , setLoading] = useState(true);
  const [dockerfile , setDockerfile] = useState("Can't find");
  const [terraform , setTerraform] = useState("Cant't find");
  const [kubernete , setkubernete] = useState("cant't find")
  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem("accessToken");
        console.log("accessToken inside MainSection", accessToken);
        if (accessToken) {
          const userData = await getUserData();
          setUserData(userData);

          const reposList = await getAllRepos();
          setReposList(reposList);
          setLoading(false);
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
        setLoading(true);
        const frameworks = await getRepoContents(repo.owner.login, repo.name);
        const buildTool = frameworks.data.data.buildTool;
        const Language = frameworks.data.data.language;
        const Name = frameworks.data.data.name;
        const dockerfilePresent = frameworks.data.data.deployTool.Dockerfile;
        const kubernetefilePresent = frameworks.data.data.kubernetefile; 

        console.log("KubernetefilePresent" , kubernetefilePresent);
        if(kubernetefilePresent === "Kubernete file Present"){
          setkubernete(kubernetefilePresent);
        }else{
          setkubernete("Can't find")
        }
        //For Terraform File
        const terraformfilePresent = frameworks.data.data.deployTool.TerraformFiles;
        if(terraformfilePresent !== undefined){
          setTerraform(terraformfilePresent);
        }else{
          setTerraform("Can't find")
        }

        console.log("Combined Results" , frameworks.data.data);

        if(dockerfilePresent === "Dockerfile"){
          setDockerfile(dockerfilePresent);
        }else {
          setDockerfile("Cant't find");
        }
        setName(Name);
        console.log("Name", Name);
        setLanguage(Language);
        console.log("Language", Language);
        setBuildtool(buildTool);
        console.log("buildTool", buildTool);
        setLoading(false);

        setSelectedRepoName(repo.full_name);
      }
    } catch (error) {
      console.error("Error handling repository selection:", error);
    }
  };

  return (
    <>
      <div
        className=" grid grid-cols-1 lg:grid-cols-3 gap-4 py-32  bg-white text-black dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white"
        style={{ minHeight: "478px" }}
      >
        <div className="lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
          {userData ? (
            <div className="pt-9 pl-12">
              <h2 className="text-xl font-bold mb-4">Repository List</h2>
              <div className="overflow-y-auto max-h-80 scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
                <ul className="pl-0">
                  {reposList.map((repo) => (
                    <li
                      key={repo.id}
                      className="flex items-center mb-2 px-4 py-2  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600"
                      onClick={() => handleRepoSelect(repo)}
                    >
                      <RiGitRepositoryLine className="mr-2" />
                      <p className="truncate max-w-xs">{repo.full_name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <ProcessingDataSpinner />
            </div>
          )}
        </div>
        {userData ? (
          <div className="lg:col-span-1 pt-9 pl-12">
            <div className="flex-col items-center justify-end pl-4">
              <h2 className="text-xl font-bold mb-4">Devops Tool</h2>
              <div className="max-w-2xl mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient border-collapse">
                  <thead className="text-xs uppercase bg-gray-50 dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white">
                    <tr>
                      <th className="py-3 px-4">Devops</th>
                      <th className="py-3 px-6">Tool</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Plan
                      </td>
                      <td className="px-6 py-2 text-blue-600">Blank</td>
                    </tr>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Build
                      </td>
                      <td className="px-6 py-2 text-blue-600">{buildTool && buildTool.length>0 ? (
                            buildTool.map((item, index) => (
                              <li className="mr-3" key={index}>
                                {item}
                              </li>
                            ))
                          ) : (
                            // eslint-disable-next-line react/no-unescaped-entities
                            <span>Can't find</span>
                          )}</td>
                    </tr>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Continuous Integration
                      </td>
                      <td className="px-6 py-2 text-blue-600">Black</td>
                    </tr>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Deploy
                      </td>
                      <td className="px-6 py-2">
                        Docker : <span className="text-blue-600">{dockerfile}</span> Terraform : <span className="text-blue-600">
                          {terraform}
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Operate
                      </td>
                      <td className="px-6 py-2 text-blue-600">{kubernete}</td>
                    </tr>
                    <tr className="bg-white dark:bg-clip-bg  dark:bg-transparent dark:bg-logo-gradient dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-4 py-2 font-medium whitespace-nowrap">
                        Continuous Feedback
                      </td>
                      <td className="px-6 py-2 text-blue-600">Black</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-xl md:text-7xl font-bold flex justify-center items-center">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </h1>
        )}

        {userData ? (
          <div className="lg:col-span-1 pt-12 pl-12">
            <div className="flex flex-col items-center justify-end pl-4 pb-8">
              <h2 className="text-xl font-bold mb-4">DevOps Tools Stack</h2>
              {loading ? <div className="spinner border-4 border-gray-400 h-10 w-10 rounded-full animate-spin"></div>
                : selectedRepoName && (
                <div className="py-3 px-4 font-bold flex items-center flex-shrink-0">
                  <RiGitRepositoryLine className="mr-2" />
                  {selectedRepoName}
                </div>
              )}
              {
                <table className="min-w-full shadow-md dark:shadow-[0_4px_10px_rgba(240,_46,_170,_0.7)] rounded-xl mr-6">
                  <tbody className="text-blue-gray-900">
                    <tr className="border-b border-black dark:border-white">
                      <th className="py-3 px-4 flex items-center">
                        <SiFramework7 className="mr-2" />
                        Framework:
                      </th>
                      <td className="py-3 px-4">
                        <ul className="flex">
                          {loading ? <div className="spinner border-4 border-gray-400 h-10 w-10 rounded-full animate-spin"></div> : Name && Name.length > 0 ? (
                            Name.map((item, index) => (
                              <li className="mr-3" key={index}>
                                {item}
                              </li>
                            ))
                          ) : (
                            <li className="text-gray-500">Null</li>
                          )}
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-black dark:border-white">
                      <th className="py-3 px-4 flex items-center">
                        <FaLanguage className="mr-2" />
                        Language:
                      </th>
                      <td className="py-3 px-4">
                        <ul className="flex">
                          {loading ? <div className="spinner border-4 border-gray-400 h-10 w-10 rounded-full animate-spin"></div> :Language && Language.length > 0 ? (
                            Language.map((item, index) => (
                              <li className="mr-3" key={index}>
                                {item}
                              </li>
                            ))
                          ) : (
                            <li className="text-gray-500">Null</li>
                          )}
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 flex items-center">
                        <IoBuild className="mr-2" />
                        Build Tool:
                      </th>
                      <td className="py-3 px-4">
                        <ul className="flex">
                          {loading ? <div className="spinner border-4 border-gray-400 h-10 w-10 rounded-full animate-spin"></div> : buildTool && buildTool.length > 0 ? (
                            buildTool.map((item, index) => (
                              <li className="mr-3" key={index}>
                                {item}
                              </li>
                            ))
                          ) : (
                            <li className="text-gray-500">Null</li>
                          )}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              }
            </div>
          </div>
        ) : (
          <ProcessingDataSpinner />
        )}
      </div>
    </>
  );
}

export default MainSection;
