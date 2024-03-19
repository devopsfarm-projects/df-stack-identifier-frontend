import { useEffect, useState } from "react";
import { getAllRepos, getRepoContents, getUserData } from "../../utils/apiUtils";

function MainSection() {
    const [userData, setUserData] = useState(null);
    const [reposList, setReposList] = useState([]);
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
                    console.log("reposList in MainSection", reposList);
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
        <div className="h-screen grid grid-cols-3 gap-4 bg-black text-white">
            <div className="col-span-1 pt-12 pl-12">
                {userData && (
                    <div className="flex flex-col items-center justify-end text-center">
                        <img src={userData.data.avatar_url} alt="User Avatar" className=" w-28 h-22 rounded-full mb-2 self-center" />
                        <div className="text-lg font-semibold ">Name: {userData.data?.login}</div>
                        <div className="mt-0" >Followers : {userData.data.followers}</div>
                        <div>Public Repos : {userData.data.public_repos}</div>
                        <div>Private Repos : {userData.data.total_private_repos}</div>
                    </div>
                )}
            </div>
            <div className="col-span-1 pt-12 pl-12">
                <div className="flex-col flex item-center justify-end pl-4">
                    <h2 className="text-xl font-bold mb-4">Repository List</h2>
                    <ul className="pl-0">
                        {reposList.map(repo => (
                            <li key={repo.id} className=" mb-2 " onClick={ () => handleRepoSelect(repo) }>
                                <p className="text-left pl-0 font-sans hover:font-serif cursor-pointer"> {repo.full_name} </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-span-1 pt-12 pl-12">
                <div  className="flex-col flex item-center justify-end pl-4">
                <h2 className="text-xl font-bold mb-4">Frameworks Used</h2>
                </div>
                <ul>
                {frameWorkUsed.map(framework => (
                            <li key={framework}>{framework}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default MainSection;
