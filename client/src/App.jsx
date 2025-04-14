import React from "react";
import Header from "./components/Header";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/user/Footer";
import Userhome from "./userdashboard/Userhome";
import ProtectedWraper from "./ProtectedWraper";
import Userheader from "./components/user/Userheader";
import Helpline from "./userdashboard/Helpline";
import Fakecall from "./userdashboard/Fakecall";
import Dashboard from "./userdashboard/Userhome";
import Training from "./userdashboard/Training";


export const services=[{
  id:1,
  title:"24/7 helpline",
  description:"Available 24/7, SecureHer connects you to emergency services and direct police assistance, providing unwavering protection whenever you need it.",
   src:"https://img.freepik.com/free-vector/illustration-24-hours-customer-support_53876-5592.jpg?t=st=1740242069~exp=1740245669~hmac=456a6f0ee64f7efc9c29ba6d9fc5dd98d789e009c84c94f88b200b5dcbb59d40&w=900"             
},{
  id:2,
  title:"Live Location tracking",
  description:"“SecureHer provides live location tracking and automatic location sharing with authorities, ensuring swift assistance when it matters most.",
   src:"https://img.freepik.com/premium-vector/online-map-phone-search-route-map-phone-navigator_647843-79.jpg"
},
{
  id:3,
  title:"Safety alarm",
  description:"SecureHer provides a safety alarm feature, allowing users to trigger a loud alert that grabs attention and deters potential threats in critical situations",
  src:"https://media.istockphoto.com/id/1144204158/vector/emergency-siren-icon-in-flat-style-police-alarm-vector-illustration-on-white-isolated.jpg?s=612x612&w=0&k=20&c=_nVlUkoM3w5QJqqAkHD4u7F8lbEV5jiWcHDJWFOQdPg="


},
{
  id:4,
  title:"Real-time emergency call/messages",
  description:"SecureHer provides real-time emergency call and messaging options with customizable alerts, instantly notifying trusted contacts and authorities.",
  src:"https://img.freepik.com/premium-vector/girl-using-mobile-phone-texting-messaging-chatting-with-friends-online-looking-smart-phone-concept-illustration_270158-343.jpg?w=826  "

},
{
  id:5,
  title:"Public awareness campaigns",
  description:"SecureHer provides public awareness campaigns, educating communities about safety practices and empowering individuals with critical knowledge to prevent incidents",
  src:"https://thumbs.dreamstime.com/b/stack-folded-newspapers-sitting-white-background-top-newspaper-open-ai-generative-stack-folded-newspapers-334454874.jpg"

},
{
  id:6,
  title:"Self-defense training session",
  description:"SecureHer provides self-defense training sessions, equipping individuals with essential skills and techniques to protect themselves in dangerous situations",
  src:"data:image/jpeg;base64,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"


}
]

export const Helpcontects = [
  {
    id: 1,
    title: "112",
    shortdescription: "National Helpline",
    longdescription: "A single emergency number for all services including police, fire, and ambulance.",
    src: "https://cdn-icons-png.flaticon.com/512/4858/4858268.png"
  },
  {
    id: 2,
    title: "108",
    shortdescription: "Ambulance Service",
    longdescription: "Emergency ambulance service available across India for medical emergencies.",
    src: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    title: "102",
    shortdescription: "Pregnancy Medical Helpline",
    longdescription: "Dedicated helpline for pregnant women and infants requiring medical assistance.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh7wXam_h9UVayOS6mFanHS4F-P4eD2BENMGFHwf-J7DNBq999Vkl6E7mM0_i71jaXBA&usqp=CAU"
  },
  {
    id: 4,
    title: "101",
    shortdescription: "Fire Service",
    longdescription: "Immediate response service for fire emergencies and rescue operations.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61lhcKZVsEpqe38ekI4i-PN3wvNyLnRo-0ubzSoI4Wgu6AM60TjBWA17e4JmPECu-oyY&usqp=CAU"
  },
  {
    id: 5,
    title: "100",
    shortdescription: "Police Helpline",
    longdescription: "Police emergency number for reporting crimes and seeking law enforcement assistance.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-OSv78cevOIPGn04Gx8vQHZeogn6gHjVx51LM9E7NU29Y5SkR7x4Ot5alcRGWHXi8-U&usqp=CAU"
  },
  {
    id: 6,
    title: "1091",
    shortdescription: "Women Helpline",
    longdescription: "Dedicated helpline for women in distress, harassment, or domestic violence cases.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzzl1VGen_FW5L0ItjMh-YXnxBdhiQ2yXOQ&s"
  },
  {
    id: 7,
    title: "1098",
    shortdescription: "Child Helpline",
    longdescription: "24/7 helpline for child protection, safety, and rescue from abuse or trafficking.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ld5LiXwKCd7TGgI62RM3oNJYg6G2DqNgCA&s"
  },
  {
    id: 8,
    title: "1073",
    shortdescription: "Road Accident Helpline",
    longdescription: "Helpline to report road accidents, hit-and-run cases, and traffic emergencies.",
    src: "https://d28c6jni2fmamz.cloudfront.net/logo_cro7_2d90f23598_870e57a03c_8543adac29.svg"
  },
  {
    id: 9,
    title: "182",
    shortdescription: "Railway Protection",
    longdescription: "Indian Railways helpline for security concerns and emergency assistance.",
    src:""
  }
];


export default function App(){

  return(
    <>
      <Routes>
       
        <Route path="/" element={<><Header/><Home/></>}/>
        <Route path="/home" element={<><Header/><Home/></>}/>
        <Route path="/About" element={<><Header/><About/></>}/>
        <Route path="/services" element={<><Header/><Services/></>}/>
        <Route path="/contactUs" element={<><Header/><ContactUs/></>}/>

        <Route path="/Login" element={<><Header/><Login/></>}/>
        <Route path="/Register" element={<><Header/><Register/></>}/>

        <Route path="/dashboard" element={<ProtectedWraper><Userheader/><Dashboard/> <Footer/></ProtectedWraper>}/>
        <Route path="/" element={<ProtectedWraper><Userheader/><Dashboard/> <Footer/></ProtectedWraper>}/>
        <Route path="/Helpline" element={<ProtectedWraper><Userheader/><Helpline/> <Footer/></ProtectedWraper>}/>
        <Route path="/fakecall" element={<ProtectedWraper><Userheader/><Fakecall/> <Footer/></ProtectedWraper>}/>
        <Route path="/training-session" element={<ProtectedWraper><Userheader/><Training/> <Footer/></ProtectedWraper>}/>

        
        


        
        

      </Routes>
     
    </>
  )
}