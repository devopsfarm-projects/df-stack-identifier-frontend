import  { useEffect, useState } from 'react'
import { getUserData } from '../../utils/apiUtils'
import MainSection from '../MainSection/MainSection';

function UserInformation() {
    const [userData, setUserData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    const userInformation = async () => {
     try {
      const token = localStorage.getItem('accessToken');
      if(token){
        const userInformatonData = await getUserData();
        setUserData(userInformatonData);
        setIsLoading(false)
       console.log("UserInformationData" , userInformatonData);
      }else{
        setIsLoading(false);
      }
       
     } catch (error) {
      console.error("Error fetching user information:", error);
        setIsLoading(false);
     }
    }
    userInformation();
  } ,[]);
  return (
    <>
    {isLoading ? <p>Data is fetching</p> 
    : <MainSection/> }
    </>
  )
}

export default UserInformation