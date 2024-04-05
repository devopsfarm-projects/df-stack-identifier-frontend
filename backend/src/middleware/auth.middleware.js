import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import accessTokenModel from "../model/access.model.js"

export const verifyAccessToken = asyncHandler(async (req , res , next) => {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        console.log("Token in middleware" , token);
        if(!token){
            throw new ApiError(401,"Unauthorized request")
        }

        const accessToken = await accessTokenModel.findOne({accessToken : token});
        if(!accessToken){
            throw new ApiError(401 , "User is not authorized")
        }

        next();

    } catch (error) {
        throw new ApiError(401 , error?.message || "Invalid Access Token")
    }
})

