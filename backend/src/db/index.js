import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import {inserFrameworks , frameworksData }from "../mongoDocument/frameworkDocument.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        await inserFrameworks(frameworksData);
        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection Failed" , error)
        process.exit(1)
    }
}

export default connectDB