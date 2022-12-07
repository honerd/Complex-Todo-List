import mongoose from "mongoose";

const RegisterModel=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model("registerModel",RegisterModel);
