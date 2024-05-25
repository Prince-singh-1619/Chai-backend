//require('dotenv').config({path: './env'})
//or you can use
import dotenv from "dotenv"

// import mongoose from 'mongoose';
// import {DB_Name} from './constants'
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server is ruuning on port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongo DB connection failed !!!")
})




// import express from 'express'
// const app = express();

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error', (error) => {
//             console.log("err: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch{
//         console.error("ERROR:", error)
//         throw err
//     }
// }) ()