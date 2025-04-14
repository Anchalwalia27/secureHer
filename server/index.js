import express from "express";
import userModel from "./config/uerModel.js";
import connection from "./config/connection.js";
import cors from "cors"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs"
import verify from "./auth/middleware.js";
import dot from "dotenv";
import {sendemail} from "./email.js"
import crypto from "crypto";


dot.config()
const salt=10;

const app=express();

app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 //register
app.post("/register",async(req,res)=>{
    const{name,email,phone,password,country,state,city,pincode}=req.body
    
   console.log(req.body)

    if(!name || !email || !phone || !password || !country || !state || !city || !pincode){
       return res.status(200).json({message:"required all details"})
    }

    const response= await userModel.findOne({email:email})
    if(response){
       return res.status(400).json({message:"allready exist"});
    }
    try{
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser= await userModel({name,email,phone,password:hashedPassword,country,state,city,pincode})

       await newUser.save();
        res.status(200).json({message:" userCreated"})

    }
    catch(error){
        res.status(400).json({message:"erorr"})

    }
}) //rgister end

// login start
app.post("/login",async(req,res)=>{
    console.log("recive",req.body)
    const{email,password,otp}=req.body
    
    try{
    const existuser= await userModel.findOne({email:email})
    if(!existuser){
      return  res.status(400).json({message:"No user found"})

    }
    console.log(typeof(existuser.password))
    if(password){
    const isMatch = await bcrypt.compare(password,existuser.password)
    if(!isMatch){
       return res.status(400).json({message:"Invalid username email or password"})
    }}
    if(otp){
        const otpmatch=(existuser.otp===otp)
        if(!otpmatch){
            return res.status(400).json({message:"Invalid otp"})
        }
    }
    const token=jwt.sign({existuserId:existuser._id,email:existuser.email},process.env.SERETE_KEY,{expiresIn:"6h"});
    res.cookie("authtoken",token,{
        httpOnly:true,
        secure: true,
        sameSite:"Strict",
        maxAge:21600000
    })
    res.status(200).json({message:"login suceffully",token:token,user:existuser})
    }
    catch(err){
        console.log("error")

    }
})//login ent



//opt Part start
//send
app.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    if (!email) return res.status(400).json({ error: "Email is required" });
try{
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);
    console.log(otp);

    let user = await userModel.findOne({ email });
    
    if (!user) {

        return res.status(400).json({ message: "No user found with this email" });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();
    sendemail(email,otp);
    console.log(user);
}
catch(error){
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
});

//
app.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ message: "Email and OTP are required" });

    try {
    const user = await userModel.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
        return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.json({ success: true, message: "OTP verified. Login successful!" });

}catch(error){

}
});





// all user

app.get("/",verify,async(req,res)=>{
    console.log("hello")
   res.status(200).json({message:"hello"})
});


app.get("/allUsers",verify,async(req,res)=>{
    try{
        const allUsers=await userModel.find();
        res.status(200).json({users:allUsers})
    }catch(err){
        res.status(400).json(err.message);
    }
});
// 
app.get("/user/:id",verify,async(req,res)=>{
    const id=req.params.id
    try{
        const user=await userModel.findOne({_id:id})
        if(!user){
            return res.status(400).json({message:"NO User Exist"})
        }
        res.status(200).json({user:user});

    }catch(err){
        res.status(400).json(err.message);
    }
})
// fake call
app.put("/user/addcallerlist/:id",verify,async(req,res)=>{
    const id=req.params.id
    const{callername}=req.body;
    console.log(req.body)
    console.log(callername)
    if(!callername){
        return  res.status(411).json({message:"all fields are required"})

    }
    
    try{
        const user=await userModel.findByIdAndUpdate(id,{$push:{ callerlist:callername}}) 
          
        if(!user){
            res.status(400).json({message:"user not found"})
        }
        else{
            res.status(200).json({message:"caller added"})
        }  
    }
    catch(erorr){
        res.status(400).json({message:"internal error"})
        
    }
})


app.listen(3000,()=>{
    console.log("server is runing")
})