import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header(){
    const items=["Home","About","Services","ContactUs"];

    return(
        < div className="top-0  z-10 ">

        {/* logo div */}
        <div className="flex justify-between bg-white ">
         <div className="flex items-center mt-2 ml-2 ">
                <img src='https://thumbs.dreamstime.com/b/love-yourself-self-care-concept-love-yourself-abstract-woman-hugging-herself-heart-shape-self-care-concept-flat-vector-234715897.jpg' alt="Secure Her Logo" className="h-14 w-auto" />
                    <span className=" text-2xl font-mono italic">Secure Her</span>
                </div>
       <div>
       <Link to={'/login'}>
        <button className="border-white shadow-md rounded-3xl  px-6 py-2 m-3   hover:shadow-2xl transition duration-200   ">Login</button>
        </Link>  
        <Link to={'/register'}>
        <button className="border-white shadow-md rounded-3xl  px-6 py-2 m-3  mr-10 hover:shadow-2xl transition duration-200   ">Register</button>
        </Link> 
        </div>    
        </div>


        {/* navbar */}
        <div className=" bg-[#092151] text-white shadow-md p-3 px-60 font-medium list-none flex items-center justify-end gap-20 w-full ">
        {items.map((item, index) => (
  <NavLink key={index} to={`/${item.toLowerCase()}`}>
    <li>{item}</li>
  </NavLink>
))}

        </div>
        </div>
    )
}