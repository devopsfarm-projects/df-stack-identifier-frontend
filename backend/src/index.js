// import express from "express";
import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

app.get('/favicon.ico', (req, res) => res.status(204));

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000 , () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


