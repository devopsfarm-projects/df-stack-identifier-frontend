import express from "express";
import "dotenv/config";
import axios from 'axios';
import cors from "cors"


const CLIENT_ID =  process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;
const app = express();
app.use(cors())


const exchangeCode = async (code) => {
    try {
        const response = await axios.post('https://github.com/login/oauth/access_token' , {
            client_id : CLIENT_ID,
            client_secret : CLIENT_SECRET_ID,
            code : code 
        }, {
            headers : {
                'Content-Type' : 'application/json',
                Accept: 'application/json'
            }
        })
        return response.data;
    } catch (error) {
        console.error("Error in Exchange code for exchange accessToken" , error);
        throw error;
    }
}

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/api/getAccessToken' , async(req , res) => {
    try{
        const code = req.query.code;
        if(!code){
            throw new Error("No code parameter is recieved")
        }
        const accessTokenData = await exchangeCode(code);
        res.send(accessTokenData)    
    }  catch(error){
    console.error('Error' , error.message);
    res.status(500).send("Internanl server Error")
}
})

    // get User Info Data
app.get("/api/userInfoData" , async(req , res) => {
    try{
        // getting header from fron end 
        const authorizationHeader = req.get("Authorization");
        if (!authorizationHeader) {
            return res.status(401).json({ error: "Authorization header is missing" });
        }
        const response = await axios.get('https://api.github.com/user' , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                // "X-GitHub-Api-Version": '2022-11-28',
                "Accept": "application/vnd.github+json"
            }
        });

        res.json(response.data);
    
    }catch(error){
        console.error('Error', error.message);

        if (error.response) {
            // The request was made and the server responded with a status code
            res.status(error.response.status).json({ error: error.response.data });
        } else {
            // The request was made but no response was received
            res.status(500).json({ error: "Internal server error" });
        }
    }
});

// get All repos 

app.get("/api/getRepos" , async(req,res) => {
    try {
        const authorizationHeader = req.get("Authorization");
        if(!authorizationHeader){
            return res.status(401).json({ error: "Authorization header is missing" });
        }

        const response = await axios.get('https://api.github.com/user/repos' , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }
        });
        res.json(response.data)
    } catch (error) {
        console.error('Error', error.message);
    }
})

// get Contents of Repos

app.get("/api/repo-contents" , async(req ,res) => {
    const authorizationHeader = req.get("Authorization");
    
    if(!authorizationHeader){
        return res.status(401).json({ error: "Authorization header is missing" });
    }
    try {
        const username = "Rahul-Chaudhary9760";
        const repoName = "My-Portfolio";
        const url = `https://api.github.com/repos/${username}/${repoName}/contents`;
        const response =await axios.get(url , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }
        })

        const rootDirectoryContents = response.data;
        const rootDirectoryFiles  =[];

        for(const item of rootDirectoryContents){
            if(item.type === "file" || item.type==="blob") {
                rootDirectoryFiles.push(item.name)
            }else if(item.type === "dir"){
                const directoryFiles  = await collectFilesInDirectory(username , repoName , item.sha , authorizationHeader);
                rootDirectoryFiles.push(...directoryFiles ); 
            }

        }
        console.log("All files content" ,rootDirectoryFiles)
    }catch(error){
        console.error("Error in getting Repo contents", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
})

async function collectFilesInDirectory(username, repoName, treeSha , authorizationHeader)  {
    try {
        const url = `https://api.github.com/repos/${username}/${repoName}/git/trees/${treeSha}`;
        const response = await axios.get(url , {
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
                
                const filesInSubDirectory  = await collectFilesInDirectory(username , repoName, item.sha);
                subDirectoryFiles.push(...filesInSubDirectory);

            }
        }

        return subDirectoryFiles;
    } catch (error) {
        console.error("Error collecting files in directory:", error);
        return []; // Return an empty array if there's an error
    }
}


const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

