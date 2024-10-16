import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
dotenv.config();


import  {connectDB} from './db/connectDB.js';

import authRoutes from './routes/auth.js'


const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))


app.use(express.json()); // allow us to parse incoming request with json payloads 

app.use(cookieParser());

app.use("/api/auth" , authRoutes);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port: ${PORT}`)
})