import mongoose from "mongoose";
const url='mongodb://127.0.0.1:27017/secureher'
const connection=mongoose.connect(url)
.then(()=>{
    console.log("database connected")
})
.catch((error)=>{
console.log("error",error)
})
export default connection;