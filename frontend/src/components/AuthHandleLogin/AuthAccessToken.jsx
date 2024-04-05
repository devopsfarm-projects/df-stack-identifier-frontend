import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { sendCodeToBackend } from "../../utils/apiUtils";

const AuthAccessToken = () => {
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const getTokenAndUserInformation = async () => {
                const urlParams = new URLSearchParams(window.location.search);
                const code = urlParams.get('code');
                console.log("Code", code);
                const token = await sendCodeToBackend(code);
                console.log("Response" , token);
                localStorage.setItem('accessToken' , `Bearer ${token}`);
                if(localStorage.getItem('accessToken')){
                    navigate('/userdata')
                }
            }
            getTokenAndUserInformation();
            
        } catch (error) {
            console.error("Error in Sending code")
        }
    })
    return (
        <>
        <h1>AuthHandleLogin</h1>
        </>
    )
    
}

export default AuthAccessToken;