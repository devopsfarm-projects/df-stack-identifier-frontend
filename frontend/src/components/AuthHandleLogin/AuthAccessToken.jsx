import { useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { sendCodeToBackend } from "../../utils/apiUtils";

const AuthAccessToken = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log("Code", code);
    })
    return (
        <>
        <h1>AuthHandleLogin</h1>
        </>
    )
    
}

export default AuthAccessToken;