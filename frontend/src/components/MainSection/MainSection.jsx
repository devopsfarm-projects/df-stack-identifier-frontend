import { useEffect , useState } from "react"
import { getAllRepos , getUserData } from "../../utils/apiUtils";

function MainSection() {
    const [userData , setUserData] = useState(null);
    useEffect(()=>{
        async function fetchData(){
            try {
                const accessToken = localStorage.getItem('accessToken');
                console.log("accessToken inside HeaderMain" , accessToken);
                if(accessToken){
                    const userData = await getUserData();
                    console.log("userData in MainSection" , userData);
                    
                    const reposList = await getAllRepos();
                    console.log("reposList in MainSection" , reposList)
                }
            } catch (error) {
                console.error("Error Handling in fetching Data in MainSection" , error)
            }
        }
        fetchData();
    }, [])

  return (
    <>
        <div>
            <div>Left Section</div>
            <div>Right Section</div>
        </div>
    </>
  )
}

export default MainSection