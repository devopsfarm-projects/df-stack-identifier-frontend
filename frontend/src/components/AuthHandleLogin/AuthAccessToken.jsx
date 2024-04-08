import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { sendCodeToBackend } from "../../utils/apiUtils";
import {useDispatch} from 'react-redux';
import { setAuthenticated } from "../../features/authSlice";
import LoadingSpinner from "../LoadingSpinner/LoadSpinner";

const AuthAccessToken = () => {
    const dispatch = useDispatch();
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
                    dispatch(setAuthenticated());
                    navigate('/userdata')
                }
            }
            getTokenAndUserInformation();
            
        } catch (error) {
            console.error("Error in Sending code")
        }
    },[dispatch, navigate])
    
    return (
        <>
        <LoadingSpinner/>
        </>
    )
    
}

export default AuthAccessToken;