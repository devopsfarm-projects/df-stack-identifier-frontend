import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {exchangeCode} from "../utils/exchangeCode.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import axios from "axios";

// For User Authorization
const authorizationUser = asyncHandler(async (req , res) => {
    const code = req.query.code ;
    if(!code){
        throw new ApiError(500  , "Error in getting code")
    }
    const response  = await exchangeCode(code);
    if(!response){
        throw new ApiError(400 , "Not getting accessToken data")
    }
    res.json(response);
});

//for User Information
const userInfoData = asyncHandler (async (req , res) => {
    const authorizationHeader = req.get("Authorization");
    if(!authorizationHeader){
        throw new ApiError(401 , "Authorization Header is missing n userInfoData")
    }
    const response = await axios.get('https://api.github.com/user' , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }
    });
    res.json(new ApiResponse(200 , response.data , "User Information is received"));
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
    if(!authorizationHeader){
        new ApiError(401 , "authorization header is missing in reposContentData")
    };
    const username = "Rahul-Chaudhary9760";
    const repoName = "My-Portfolio";
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
    res.json(new ApiResponse(200 , rootDirectoryFiles , "All files of Directory"));
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

export {
    authorizationUser, 
    userInfoData, 
    reposListData,
    reposContentData
}