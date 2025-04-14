import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Fakecall() {
    const [callerlist, setCallerlist] = useState([]);
    const[callername,setCallername]=useState({
        name:"",
        number:""
    });



    async function handleSubmit(e) {
        e.preventDefault();
        console.log("Caller Added:", callername);
        const id=localStorage.getItem("id")
        const response= await axios.put(`http://localhost:3000/user/addcallerlist/${id}`,{callername},
            {headers:{
            Authorization:localStorage.getItem("token")
        }})
        if(response.status==200){
            setCallername("");
            getUsercallerList();  
        }
    }
    
    async function getUsercallerList(){
        const id=localStorage.getItem("id")

        const response= await axios.get(`http://localhost:3000/user/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        console.log(response.data)
        if(response.status==200){
            setCallerlist(response.data.user.callerlist)
        }
       }
    
    useEffect(()=>{
           getUsercallerList();    
    },[])

    return (
        <div>
            <div>
                <h1>Caller Details</h1>
                <p>specify time and caller details to schedule a fake call</p>
            </div>
            
            <div className="bg-gray-400/30 shadow-md rounded-4xl w-fit m-2 ">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter name"
                    value={callername.name}
                    onChange={(e) => setCallername( {...callername, name:e.target.value})}
                    className="p-3 m-2 border-none rounded-2xl text-center outline-none"
                />
                <input 
                type="text"
                placeholder="Enter number"
                value={callername.number}
                onChange={(e)=>setCallername({...callername,number:e.target.value})}
                className="p-3 m-2 border-none rounded-2xl text-center outline-none"
                />
                <button type="submit" className="bg-blue-900 text-white p-3 m-2 outline-none rounded-4xl">
                 Add+
                </button>
            </form>
            </div>
            <div className="list-none ">
                {callerlist.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                    )

                })}
            </div>
      
        </div>
    );
}
