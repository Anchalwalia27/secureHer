import jwt from "jsonwebtoken";

 const verify=(req,res,next)=>{
    const token=req.cookies.authtoken || req.headers.authorization;
    
    if(!token){
        return res.status(400).json({message:"unauthrized"})
    }
    try{
        const decode=jwt.verify(token,process.env.SERETE_KEY);
        req.user=decode;
       
        next();
    }
    catch(error){
       return res.status(400).json({message:"invalid"})
    }
}
export default verify;