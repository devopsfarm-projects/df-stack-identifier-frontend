
import { getUserData } from "../../utils/apiUtils"


function Home() {
  const handleButtonClick = async() => {
    try {
      await getUserData();
    } catch (error) {
      console.error("Error in fetching user Data" , error)
    }
  }
  return (
    <>
    <h1>Home</h1>
    <button onClick={handleButtonClick}>Get User Data</button>
    </>
  )
}

export default Home