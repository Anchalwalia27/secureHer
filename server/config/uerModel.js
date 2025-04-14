import mongoose from "mongoose";

const schema= mongoose.Schema(
    {
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
            type:String,
            require:true
    },
    country:{
        type:String,
        require:true
    },
    state:{
        type:String,
        
        require:true
    },
    city:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },

    pincode:{
        type:String,
        require:true,
    },
    callerlist:[
        {
            type:String,
            default:null
        }
    ]
    ,
    otp:{
        type:String
    },
    otpExpires: Date

    
})


const userModel=new mongoose.model("user",schema)
export default userModel;