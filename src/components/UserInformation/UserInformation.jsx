import  { useEffect, useState } from 'react'
import { getUserData } from '../../utils/apiUtils'
import MainSection from '../MainSection/MainSection';
import LoadingSpinner from '../LoadingSpinner/LoadSpinner';

function UserInformation() {
    const [userData, setUserData] = useState(null);
  const [isLoading , setIsLoading] = useState(false);
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
    {isLoading ? <LoadingSpinner/> : <MainSection/>   }
    </>
  )
}

export default UserInformation