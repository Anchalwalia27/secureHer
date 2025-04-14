import React from "react";

export default function Subcontect({ src, title, shortdescription, longdescription }) {
  return (
    <div className="bg-pink-200/20 w-full sm:w-full md:w-2/3 lg:w-1/3 xl:w-1/4 p-5 flex flex-col gap-2 justify-start items-start sm:items-center  rounded-2xl shadow-lg">
      {/* Image */}
      <img src={src} alt={title} 
        className="w-16 h-16 md:w-20 md:h-20 object-contain hidden sm:block "/>

      {/* Title & Short Description */}
      <h1 className="text-xl flex lg:justify-center w-full font-bold  ">{title}</h1>
      <h2 className="text-lg flex lg:justify-center w-full font-semibold">{shortdescription}</h2>

      {/* Long Description (Hidden on Small Screens) */}
      <p className="h-1/3 font-medium text-sm px-1 hidden sm:block">{longdescription}</p>
      <a 
        href={`tel:${title}`} 
        className="mt-2 px-4 py-2 bg-[#124] text-white text-center font-bold rounded-lg shadow-md hover:bg-[#1249] transition"
      >
       <h1 className="text-center  "> Call Now</h1>
      </a>
    </div>
  );
}
