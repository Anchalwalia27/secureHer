import React from "react";

export default function Subservice({title,description,src}){
    return(
        
            <div className="bg-[#cecccc] w-1/4 p-5 flex flex-col gap-2 justify-start  items-center rounded-2xl ">
            <h1 className="text-xl flex justify-start w-full font-bold ">{title}</h1>
            <p className="h-1/3 font-medium text-sm px-1">{description}</p>
            <img
            src={src}
            className="w-[200px] h-[150px] rounded-2xl"/>

        </div>
      
    )
}