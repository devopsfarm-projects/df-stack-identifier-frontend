// import express from "express";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: './.env'
});

app.get('/favicon.ico', (req, res) => res.status(204));

const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

