const express = require('express');
require('dotenv').config();
const cors = require('cors')

const CLIENT_ID =  process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;

const app = express();
app.use(cors())

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

    const result  = await fetch('https://github.com/login/oauth/access_token' , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(params)
    })
    return parseResponse(result);
};

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/' , (req , res) => {
    console.log("CLIENT_ID" , CLIENT_ID);
    const link = `<a href="https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}">Login with GitHub Authorize</a>`;
    res.send(link)
    console.log("Inside the / route and",link);
})

app.get('/callback' , async(req , res) => {
    const code = req.query.code;

    try{
        console.log("Inside try blog")
        const accessTokenData = await exchangeCode(code);
        if(accessTokenData.access_token){
            const accessToken = accessTokenData.access_token;
            res.send(`Successfully authorized! Got access token: ${accessToken}`);
        } else {
            throw new Error("Failed to exchange code for access token");
        }

 
}  catch(error){
    console.error('Error' , error.message);
    res.status(500).send("Internanl server Error")
}

})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





