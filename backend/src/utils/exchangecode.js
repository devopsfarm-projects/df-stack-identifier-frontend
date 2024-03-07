import axios from "axios";
import { ApiError } from "./ApiError.js";
import { ApiResponse } from "./ApiResponse.js";

const exchangeCode = async (code) => {
    try {
        const response = await axios.post('https://github.com/login/oauth/access_token' , {
            client_id : process.env.CLIENT_ID,
            client_secret : process.env.CLIENT_SECRET_ID,
            code : code 
        }, {
            headers : {
                'Content-Type' : 'application/json',
                Accept: 'application/json'
            }
        })
        return new ApiResponse(200 , response.data , "AccessToken is Recieved ")
    } catch (error) {
        throw new ApiError(400 , "Error in Getting Access Token")
    }
}

export {exchangeCode}