import { Link ,NavLink} from "react-router-dom";
import React, { useState } from "react";

export default function Userheader(){
const item=["Dashboard","Safty-Alarm","Training-Session","Awareness-Campaigns"]


    return(
      <div>
          <div className=" flex justify-between shadow-lg ">
 {/* logo */}
 <div className="flex items-center space-x-2">
        <img
          src="https://thumbs.dreamstime.com/b/love-yourself-self-care-concept-love-yourself-abstract-woman-hugging-herself-heart-shape-self-care-concept-flat-vector-234715897.jpg"
          alt="Secure Her Logo"
          className="h-10 sm:h-12 md:h-14 w-auto max-w-xs sm:max-w-sm object-contain"
        />
        <span className="text-lg sm:text-xl md:text-2xl font-mono italic">Secure Her</span>
      </div>
        {/* <Link to={'/home'}>
        <button className="border-white shadow-md rounded-3xl  px-6 py-2 m-3 mr-10  hover:shadow-2xl transition duration-200   ">Logout</button>
        </Link>  */}
        
                
                
        </div>
        {/* navbar */}
        <div className="  bg-gray-800  text-white shadow-md p-3 px-60 font-medium list-none flex items-center justify-end gap-20 ">
        {item.map((item, index) => (
  <NavLink
   key={index} 
   to={`/${item.toLowerCase()}`}
   className="text-sm md:text-base lg:text-lg font-medium hover:shadow-md hover:text-amber-1 00 transition"

   >
    <li>{item}</li>
  </NavLink>
))}

        </div>
      </div>
    )
}
