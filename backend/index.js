import express from "express";
import 'dotenv/config';
import cors from "cors";
import session from "express-session";
import axios from 'axios'

const CLIENT_ID =  process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;
const app = express();
app.use(cors());



const parseResponse = (response) => {
    switch (response.status) {
        case 200:
            return response.json();
        default:
            console.error(response.statusText);
            return{};
    }
};

const exchangeCode = async (code) => {
    const params = {
        client_id : CLIENT_ID,
        client_secret : CLIENT_SECRET_ID,
        code : code 
    }
    try{
        const result  = await fetch('https://github.com/login/oauth/access_token' , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(params)
    })
    return parseResponse(result);
    }catch(error){
        console.error("Error exchanging code for access token:", error.message);
        throw error;
    }
};

app.get('/favicon.ico', (req, res) => res.status(204));



app.get('/api/getAccessToken' , async(req , res) => {
    try{
        const code = req.query.code;
        console.log("Authentication code is " , code);
        if(!code){
            throw new Error("No code parameter is recieved")
        }
        const accessTokenData = await exchangeCode(code);
        console.log("AcccesToken Data" ,  accessTokenData)
        const accessToken =await  accessTokenData.access_token;
        res.send(accessTokenData)   //  
    }  catch(error){
    console.error('Error' , error.message);
    res.status(500).send("Internanl server Error")
}
})

    // get User Info Data
app.get("/api/userInfoData" , async(req , res) => {
    console.log("Inside userInofoData")
    console.log(req.get("Authorization"));
    try{
        // getting header from fron end 
        const authorizationHeader = req.get("Authorization");
        console.log('AuthorizationHeader' , authorizationHeader);
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
        console.log("Authorization Header" , authorizationHeader)
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
        const {username , repoName} = req.query;
        const url = `https://api.github.com/repos/${username}/${repoName}/contents`;
        const response = axios.get(url , {
            headers : {
                "Authorization" : `${authorizationHeader}`,
                "Accept": "application/vnd.github+json"
            }
        })
        res.json(response.data);
    } catch (error) {
        console.error("Error in getting Repo contents" , error)
    }
})



const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

