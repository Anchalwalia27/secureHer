import React from "react";
import v3 from "../assets/v3.mp4"

export default function VideoHome(){
    return(
       <div className="  relative  rounded-2xl overflow-hidden ">
               {/* Video */}
               <video
                src={v3}
                 className="brightness-40  rounded-4xl w-[800px]"
                    autoPlay
                    loop
                    muted
                    playsInline>
               </video>
       
               {/* Text */}
               <div className="absolute inset-0 flex justify-center items-center pt-26 ml-9">
                 <h1 className="text-gray-400/60 text-5xl  font-extrabold text-center ">
                   Empowering Women, <br /> Transforming Safety
                 </h1>
               </div>
             </div>
    )
}