import { useEffect, useState } from "react";
import { getAllRepos, getRepoContents, getUserData } from "../../utils/apiUtils";

function MainSection() {
    const [userData, setUserData] = useState(null);
    const [reposList, setReposList] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [frameWorkUsed, setFrameworks] = useState([]);

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

    const handleRepoSelect= async (repo) => {
        try {
            if(repo){
                const frameworks = await getRepoContents(repo.owner.login , repo.name);
                const frameWorkUsed = frameworks.data.data;
                setFrameworks(frameWorkUsed)
            }
        } catch (error) {
            console.error("Error handling repository selection:", error);
        }
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-black text-white">
        <div className="lg:col-span-1 pt-12 lg:pt-0 pl-12 lg:pl-0">
            {userData && (
                <div className="flex flex-col items-center justify-end text-center">
                    <img src={userData.data.avatar_url} alt="User Avatar" className="w-28 h-22 rounded-full mb-2 self-center" />
                    <div className="text-lg font-semibold">Name: {userData.data?.login}</div>
                    <div>Followers: {userData.data.followers}</div>
                    <div>Public Repos: {userData.data.public_repos}</div>
                    <div>Private Repos: {userData.data.total_private_repos}</div>
                </div>
            )}
        </div>
        <div className="lg:col-span-1 pt-12 pl-12">
            <div className="flex-col flex items-center justify-end pl-4">
                <h2 className="text-xl font-bold mb-4">Repository List</h2>
                <ul className="pl-0">
                    {reposList.map(repo => (
                        <li key={repo.id} className="mb-2" onClick={() => handleRepoSelect(repo)}>
                            <p className="relative flex flex-col text-white bg-black shadow-md w-full lg:w-96 rounded-xl bg-clip-border">{repo.full_name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="lg:col-span-1 pt-12 pl-12">
            <div className="flex-col flex items-center justify-end pl-4">
                <h2 className="text-xl font-bold mb-4">DevOps Tools Stack</h2>
                <div className="border rounded-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">Framework Name:</h3>
                    <p>React</p>
                </div>
                <div className="border rounded-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">Language:</h3>
                    <p>JavaScript</p>
                </div>
                <div className="border rounded-md p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">Build Tool:</h3>
                    <p>Webpack</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default MainSection;
