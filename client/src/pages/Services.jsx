import React from "react";
import {motion} from "motion/react"
import Vedio2 from "../components/vedio2";
import Subservice from "../components/Subservice";
import { services } from "../App";
export default function Services(){

    return (
        <div className="flex flex-col pt-2 w-full items-center md:px-4 ">
        {/*image vedio */}
        <div className="flex justify-center items-center mt-10 mb-10 ">
        <Vedio2/>
       </div>

            {/*content */}
        <motion.p
        animate={{scaleX:0.9}}
        transition={{duration:2, delay:1}}
        >
        <p className=" flex justify-center  items-center mx-2 mt-2 text-md text-[#123] text-center font-medium md:text-3xl p-1  ">
        "From alerts to action, SecureHer is your safety partner."</p>
        </motion.p>

            {/* productcontent */}

            <div className=" relative  flex flex-col items-center justify-center px-15 pb-5 mt-10 text-3xl text-justify font-semibold text-[#123]">
                <h1 >It’s not just products</h1>
                <div className= " absolute bg-red-500 h-1 w-70 top-5 ">  </div>
                <h1>It’s our commitment to<br/> meaningful solutions.</h1>
            </div>

            <h1 className="text-4xl mt-5 font-bold ">OUR SERVICES</h1>

            {/* service */}
           <div className="flex flex-wrap gap-7 py-8 mt-3 justify-center">
           {services.map((item,index)=>{
                return(<Subservice key={index} title={item.title} description={item.description} src={item.src}/>)
            })}

           </div>

        
           
            

            
            
            
            

        
    </div>
      );
}