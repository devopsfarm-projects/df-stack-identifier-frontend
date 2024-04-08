import  { useEffect, useState } from 'react'
import { getUserData } from '../../utils/apiUtils'
import MainSection from '../MainSection/MainSection';
import {useSelector} from 'react-redux';
import LoadingSpinner from '../LoadingSpinner/LoadSpinner';

function UserInformation() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const [userData, setUserData] = useState(null);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    const userInformation = async () => {
     try {
      if(isAuthenticated){
        const token = localStorage.getItem('accessToken');
        if(token){
          const userInformatonData = await getUserData();
          setUserData(userInformatonData);
          setIsLoading(false)
          console.log("UserInformationData" , userInformatonData);
      }
      }else{
        setIsLoading(false);
      }
       
     } catch (error) {
      console.error("Error fetching user information:", error);
        setIsLoading(false);
     }
    }
    userInformation();
  } ,[isAuthenticated]);
  return (
    <>
    {isLoading ? <LoadingSpinner/>
    : isAuthenticated ? <MainSection/> : <p>Please log in to view user information.</p>  }
    </>
  )
}

export default UserInformation