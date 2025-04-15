import React from "react";
import { useState } from "react";
import Vedio from "../components/Vedio"
import Gettouch from "../components/Gettouch";
import {motion,} from "framer-motion"
import { useInView } from "framer-motion";



export default function Home(){
    const[textVisble,SetTextVesible]=useState(false)
    const{ref , inview}=useInView({
        triggerOnce:true,
        threshold:0.1
    })


    return(
        <>
        <div className="flex justify-center flex-col gap-10 items-center w-full bg-fuchsia-100/20 ">
            {/* vedio */}
           <div className="flex justify-center items-center mt-10  ">
            <Vedio className="md:hidden"/>
            
           </div>
           {/* contnt */}
           <div className="text-2xl font-bold flex flex-col gap-2 items-center rounded-lg text-[#123985] mt-6 w-[1000px]  7+  ">
           <p className="px-4 pt-4">"Your Safety, Our Priority – Empowering You Anytime, Anywhere."</p>
           <p className="pb-4">"SecureHer: Seamless Protection with Smart Features at Your Fingertips".</p>
           </div>

 {/* services section */}
           <div className="bg-gray-400/50 w-[1500px] flex items-center rounded-2xl flex-col">
    {/* image vala dd */}
           <div className="flex gap-6 py-10  ml-6 ">
             
                {/**help */}
                <div className="w-45 h-40 rounded-full shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer"
                 onClick={()=>{SetTextVesible(!textVisble)
                }}>
                {textVisble?(<span className="text-lg font-semibold text-gray-800">24/7 Helpline</span>
                ):(
                <img
                src={"https://img.freepik.com/free-vector/illustration-24-hours-customer-support_53876-5592.jpg?t=st=1740242069~exp=1740245669~hmac=456a6f0ee64f7efc9c29ba6d9fc5dd98d789e009c84c94f88b200b5dcbb59d40&w=900"}
                alt="helpline"
                className="w-45 h-40 rounded-full " />
                )}
                </div>

                {/** Live Location tracking*/}
                <div className="w-45 h-40 rounded-full shadow-lg flex items-center justify-center bg-gray-200 cursor-pointer"
                 onClick={()=>{SetTextVesible(!textVisble)
                }}>
                {textVisble?(<span className="text-lg font-semibold text-gray-800">Live Location tracking</span>
                ):(
                <img
                src="https://img.freepik.com/premium-vector/online-map-phone-search-route-map-phone-navigator_647843-79.jpg"
                alt="helpline"
                className="w-45 h-40 rounded-full " />
                )}
                </div>

                {/* Safety alarm */}
                <img
                src="https://media.istockphoto.com/id/1144204158/vector/emergency-siren-icon-in-flat-style-police-alarm-vector-illustration-on-white-isolated.jpg?s=612x612&w=0&k=20&c=_nVlUkoM3w5QJqqAkHD4u7F8lbEV5jiWcHDJWFOQdPg="

                alt=" Safety alarm"
                className=" w-[300px ] h-[150px] rounded-full"/>

                {/*Real-time emergency call/messages*/}
                <img
                src={"https://img.freepik.com/premium-vector/girl-using-mobile-phone-texting-messaging-chatting-with-friends-online-looking-smart-phone-concept-illustration_270158-343.jpg?w=826  "}
                alt="Real-time call/messagese"
                className=" w-[310px ] h-[150px] rounded-full hover:cursor-pointer"/>

                {/**hfake*/}
                <img
                 src={"https://img.freepik.com/free-vector/calling-concept-illustration_114360-3356.jpg?ga=GA1.1.162725345.1740168767&semt=ais_hybrid"}
                 alt="helpline"
                className=" w-[130px ] h-[150px] rounded-full"/>

                {/*Public awareness campaigns*/}
                <img
                 src={"https://thumbs.dreamstime.com/b/stack-folded-newspapers-sitting-white-background-top-newspaper-open-ai-generative-stack-folded-newspapers-334454874.jpg"}
                 alt="Public awareness campaigns"
                className=" w-[2000px ] h-[150px] rounded-full"/>

                {/**Self-defense training session*/}
                <img
                src={"data:image/jpeg;base64,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"}
                alt="Self-defense training session"
                className="w-[150px] h-[150px] rounded-full"/>
           </div>
            {/* contnt */}
            <p className="text-[#123985] text-2xl font-medium text-justify pb-10  duration-200 hover:text-3xl  "> Take advantage of our current technology -with SecureHer</p>
           </div>

           {/* why chose contnt */}
           <motion.h1
           ref={ref}
           initial={ { opacity:0,x:-60}}
           animate={{opacity:inview?0:2 ,x:inview?-60:0}}
           transition={{
            duration:5,
            delay:1

           }}
            className="text-4xl text-[#123] text-start font-bold mr-250">Why We Chose Us</motion.h1>
           
           <div className="flex w-full items-center justify-center    ">
           
                {/* div1 */}
            <div className="text-[#123] text-md md:ml-1 md:text-xl  w-1/2 ml-15 pl-10 ">
                <h1 className="font-bold   pb-1">Comprehensive Safety Solutions </h1>
                <p className="font-medium pb-8">SecureHer ensures your physical and emotional well-being through innovative
                     safety features tailored to protect and empower you.</p>

                     <h1 className="font-bold  py-1">Intuitive and Accessible Interface </h1>
                <p className="font-medium p-1">Our user-friendly design makes navigating SecureHer’s 
                    features effortless, ensuring convenience in critical moments.</p>
            </div>
                    {/* line */}
            <div className="bg-gray-950/60 w-0.5 h-55 ml-3"></div>
                     {/*div2  */}
            <div className="text-[#123] md:text-xl w-1/2 ml-10 pl-3  ">
                <h1 className="font-bold  py-1">Empowering Personal Safety </h1>
                <p className="font-medium pb-6">Strengthen your safety with cutting-edge features like live tracking,
                     real-time alerts, and emerg    ency assistance, designed to protect you at every step.</p>
                <h1 className="font-bold  py-1">Pioneering Safety Standards</h1>
                <p className="font-medium p-1">We lead in adopting advanced safety measures, ensuring compliance with modern regulations and fostering a secure 
                    environment.</p>
            </div>
           </div>
           <Gettouch/>
        </div>
        </>
    )
}