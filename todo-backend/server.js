import express  from "express";
import Cors from "cors"
import mongoose from "mongoose";

//app config
const app=express();
const port=process.env.PORT||5000;
//middlewares
app.use(express.json());
app.use(Cors());
//dbconfig

//endpoints

app.get('/',(req,res)=>
{
    res.status(200).send("hey the program works");
})

//listeners
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
