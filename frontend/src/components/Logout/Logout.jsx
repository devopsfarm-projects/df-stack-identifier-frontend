import {logoutUser} from "../../utils/apiUtils.js"
function Logout() {
    const handleButtonClick = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.error("Error in Logout component user logout")
        }
    }
  return (
    <div>
        <button onClick={handleButtonClick}>Log out</button>
    </div>
  )
}

export default Logout