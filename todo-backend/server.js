import express  from "express";
import Cors from "cors"
import mongoose from "mongoose";
import registerModel from "./Model.js";

//app config
const app=express();
const port=process.env.PORT||5000; 
//middlewares
app.use(express.json());
app.use(Cors());
//dbconfig
const mongo_url="mongodb+srv://yash_3006:mummypapa0705@todo-peopledata.ozjewc1.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongo_url);

//endpoints

app.get('/',(req,res)=>
{
    res.status(200).send("hey the program works");
})

app.get('/register',(req,res)=>
{
    res.status(200).send("this end point works");
})

app.post('/register',(req,res)=>{
    const user=req.body;

    registerModel.create(user,(err,data)=>{
        if(err)
        {
            res.status(501).send(err);
        }
        else
        {
            res.status(201).send(data);
        }
    })
});

//listeners
app.listen(port,()=>{
    console.log(`listening on port: ${port}`);
})
