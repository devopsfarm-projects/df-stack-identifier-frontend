import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import axios from "axios";
import {detectFrameworks} from "../analyzeModel/analyzeFiles.js"
import accessTokenModel from "../model/access.model.js";


// For User Authorization
const authorizationUser = asyncHandler(async (req , res) => {
    try {
        const code = req.query.code;
        console.log("Code From FrontEnd" , code);
        if(!code){
            throw new ApiError(500  , "Error in recieving code");
        }

        //For Access Token from github
        const response = await axios.post('https://github.com/login/oauth/access_token' , {
            client_id : process.env.CLIENT_ID,
            client_secret : process.env.CLIENT_SECRET_ID,
            code : code 
        }, {
            headers : {
                'Content-Type' : 'application/json',
                Accept: 'application/json'
            }
        });
        const accessToken = response.data?.access_token;
        if (!accessToken) {
            throw new ApiError(500, "Failed to retrieve access token from GitHub");
        }
        console.log("AccessToken" , accessToken);

        // Get user data from GitHub
        const userResponse = await axios.get('https://api.github.com/user' , {
            headers : {
                'Authorization': `Bearer ${accessToken}`,
                "Accept": "application/vnd.github+json"
            }
        });
        const { id: githubUserId, login: githubUserName } = userResponse.data;
        if (!githubUserId || !githubUserName) {
            throw new ApiError(500, "Failed to retrieve GitHub user information");
        }
        const userData = userResponse.data;
        const reponseData = {
            accessToken : accessToken,
            userData : userData
        }
        // Save access token to database
        // const newAccessToken = new accessTokenModel({
        //     accessToken: accessToken,
        //     githubUserId: githubUserId,
        //     githubUserName: githubUserName
        // });
        // const savedUser = await newAccessToken.save();
        // console.log('User saved successfully:', savedUser);

        //Send AccessToken to frontEnd
        res.json(new ApiResponse(200 , reponseData, "Authorization Successfull"));
    } catch (error) {
        throw new ApiError(400 , "Error in Getting Access Token")
    }
});

//for User Information
const userInfoData = asyncHandler (async (req , res) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const response = await axios.get('https://api.github.com/user' , {
                headers : {
                    "Authorization" : `${authorizationHeader}`,
                    "Accept": "application/vnd.github+json"
                }
        });
        res.json(new ApiResponse(200 , response.data , "User Information is received"));
    } catch (error) {
        throw new ApiError(400 , "Error getting in User Data")
    }
});

// For User Repos List
const reposListData = asyncHandler (async (req ,res) => {
    const authorizationHeader = req.get('Authorization');
    if(!authorizationHeader){
        throw new ApiError(401 , "Authorization Header is reponse in reposListData")
    };
    const response = await axios.get('https://api.github.com/user/repos' , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }
    });
    res.json(new ApiResponse(200 , response.data , "ReposList Data is recieved"));
})

// For Repos Content 
const reposContentData = asyncHandler(async (req , res) => {
    const authorizationHeader = req.get("Authorization");
    const username = req.query.userLogin;
    const repoName = req.query.repoName;
    if(!authorizationHeader){
        new ApiError(401 , "authorization header is missing in reposContentData")
    };
    const response =await axios.get(`https://api.github.com/repos/${username}/${repoName}/contents` , {
        headers : {
            "Authorization" : `${authorizationHeader}`,
            "Accept": "application/vnd.github+json"
        }
    })
    const rootDirectoryContents = response.data;
    const rootDirectoryFiles = [];

    for(const item of rootDirectoryContents){
        if(item.type === "file" || item.type === "blob"){
            rootDirectoryFiles.push(item.name);
        }else if(item.type === "dir"){
            const subDirectoryFiles = await collectSubDirectoryFiles(username , repoName , item.sha , authorizationHeader);
            rootDirectoryFiles.push(...subDirectoryFiles);
        }
    }
    try {
        const combinedResults = await detectFrameworks(rootDirectoryFiles);
        console.log("CheckContriztionDockerFile" , combinedResults);
        res.json(new ApiResponse(200, combinedResults, "Detected frameworks"));
    } catch (error) {
        console.error("Error Detecting frameworks:", error);
        res.status(500).json(new ApiResponse(500, null, "Error detecting frameworks"));
    }
})

async function collectSubDirectoryFiles(username, repoName, treeSha , authorizationHeader)  {
    try {
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}/git/trees/${treeSha}` , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }   
        });
        const subDirectoryContents  = response.data.tree;
        const subDirectoryFiles  = []
        for (const item of subDirectoryContents ) {
            if (item.type === "blob"|| item.type === "file") {
                // If it's a file, collect its name
                subDirectoryFiles.push(item.path);
            } else if (item.type === "tree") {
                // If it's a directory, recursively collect files in the subdirectory
                const filesInSubDirectory  = await collectSubDirectoryFiles(username , repoName, item.sha , authorizationHeader );
                subDirectoryFiles.push(...filesInSubDirectory);

            }
        }

        return subDirectoryFiles;
    } catch (error) {
        console.error("Error collecting files in directory:", error);
        return []; 
    }
}

// Logout User 
const logoutUser = asyncHandler(async(req , res) => {
    try {
        const token = req.headers.authorization?.replace('Bearer','').trim();
        console.log("Token in logout User" , token)
        // const accessToken = await accessTokenModel.findOne({accessToken : token});
        // if (!accessToken) {
        //     throw new ApiError(404, "User not found");
        // }
        // await accessTokenModel.deleteOne({ accessToken: token });
        // console.log("User logged out successfully");
        res.json(new ApiResponse(200 , "User logout Succesfully")); 
    }catch(error){
        console.error("Error logging out user :" , error)
    }
       
})

export {
    authorizationUser, 
    userInfoData, 
    reposListData,
    reposContentData,
    logoutUser
}